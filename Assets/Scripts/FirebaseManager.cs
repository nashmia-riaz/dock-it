using Firebase.Extensions;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Firebase.Database;
using Firebase.Auth;
using Firebase;

public class FirebaseManager : MonoBehaviour
{
    FirebaseApp app;
    FirebaseAuth auth;
    DatabaseReference reference;

    public static FirebaseManager instance;

    string refreshToken;

    [SerializeField]
    public User currentUser;


    private void Awake()
    {
        if (instance == null)
        {
            instance = this;
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(this);
        }
    }

    void Initialize()
    {
        FirebaseApp.CheckAndFixDependenciesAsync().ContinueWithOnMainThread(task =>
        {
            var dependencyStatus = task.Result;
            if (dependencyStatus == DependencyStatus.Available)
            {
                Debug.Log("Setting up firebase.");

                // Create and hold a reference to your FirebaseApp,
                // where app is a Firebase.FirebaseApp property of your application class.
                app = FirebaseApp.DefaultInstance;

                //authenticator initialized
                auth = FirebaseAuth.DefaultInstance;

                //get root database reference
                reference = FirebaseDatabase.DefaultInstance.RootReference;

                ////disable loading panel
                refreshToken = PlayerPrefs.GetString("Token");

                ////if refreshtoken exists, fetch one from server and compare
                if (refreshToken != "")
                {
                    Debug.Log("[SIGN IN] Token exists");
                    GetUserBasedOnToken(refreshToken, ()=> {
                        if (currentUser != null)
                        {
                            Debug.Log("[SIGN IN] Current user is not null");
                            if (currentUser.userToken == refreshToken)
                            {
                                Debug.Log("[USER] Signed in using token " + currentUser.userToken);
                                //OnAutoSignIn();
                                FetchLists();
                            }
                            else
                            {
                                Debug.Log("[SIGN IN] Tokens don't match");
                                
                                UIHandler.instance.SwitchToPanel(UIHandler.instance.signinPanel);
                                UIHandler.instance.LoadingPanelFadeOut();
                            }
                        }
                        else
                        {
                            Debug.Log("[SIGN IN] Current user is null");

                            UIHandler.instance.SwitchToPanel(UIHandler.instance.signinPanel);
                            UIHandler.instance.LoadingPanelFadeOut();
                        }
                    });
                }
                else
                {
                    UIHandler.instance.SwitchToPanel(UIHandler.instance.registerPanel);
                    UIHandler.instance.LoadingPanelFadeOut();
                }

            }
            else
            {
                Debug.Log("Could not load firebase");
                Debug.LogError(System.String.Format(
                  "Could not resolve all Firebase dependencies: {0}", dependencyStatus));
                // Firebase Unity SDK is not safe to use here.
            }
        });
    }

    User GetUserBasedOnToken(string token, Helper.basicFunction toExecuteOnSuccess)
    {
        User user = null;

        reference.Child("Users").GetValueAsync().ContinueWithOnMainThread(task => {
            if (task.IsFaulted)
            {
                Debug.LogError("Task failed " + task.Exception);
            }
            else if (task.IsCompleted)
            {
                DataSnapshot snapshot = task.Result;
                IEnumerable<DataSnapshot> users = snapshot.Children;

                foreach(var firebaseUser in users)
                {
                    User newUser = new User(firebaseUser.Child("email").Value.ToString(), firebaseUser.Child("userID").Value.ToString(), firebaseUser.Child("userToken").Value.ToString());

                    if (newUser.userToken == token)
                    {
                        this.currentUser = newUser;
                    }
                }

                toExecuteOnSuccess();
            }
        });

        return user;
    }

    public void RegisterUser(string email, string password)
    {
        UIHandler.instance.LoadingPanelFadeIn("Registering user...");

        auth.CreateUserWithEmailAndPasswordAsync(email, password).ContinueWithOnMainThread(task =>
        {
            if (task.IsCanceled)
            {
                UIHandler.instance.OnRegisterError("Could not connect");
                UIHandler.instance.LoadingPanelFadeOut();
                return;
            }
            if (task.IsFaulted)
            {
                UIHandler.instance.OnRegisterError(task.Exception.InnerException.GetBaseException().Message);
                UIHandler.instance.LoadingPanelFadeOut();
                return;
            }

            // Firebase user has been created.
            FirebaseUser newUser = task.Result;
            Debug.LogFormat("Firebase user created successfully: {0} ({1})",
                newUser.DisplayName, newUser.UserId);

            OnSignIn(12, newUser, ()=> {
                CreateEmptyList();
            });

        });
    }

    public void SignInUser(string email, string password)
    {
        UIHandler.instance.LoadingPanelFadeIn("Signing in...");
        auth.SignInWithEmailAndPasswordAsync(email, password).ContinueWithOnMainThread(task => {
            if (task.IsCanceled)
            {
                UIHandler.instance.OnSignInError("Could not connect");
                UIHandler.instance.LoadingPanelFadeOut();
                return;
            }
            if (task.IsFaulted)
            {
                UIHandler.instance.OnSignInError(task.Exception.InnerException.GetBaseException().Message);
                UIHandler.instance.LoadingPanelFadeOut();
                return;
            }

            FirebaseUser newUser = task.Result;
            Debug.LogFormat("User signed in successfully: {0} ({1})",
                newUser.DisplayName, newUser.UserId);
            currentUser = new User(email, "", "");
            OnSignIn(12, newUser, ()=> { });
        });
    }

    void OnSignIn(int tokenSize, FirebaseUser firebaseUser, Helper.basicFunction executeAtEnd)
    {
        refreshToken = Helper.GenerateToken(tokenSize);
        PlayerPrefs.SetString("Token", refreshToken);
        Debug.Log("Generated new token " + refreshToken);

        User user = new User(firebaseUser.Email, firebaseUser.UserId, refreshToken);
        string jsonUser = JsonUtility.ToJson(user);

        reference.Child("Users").Child(firebaseUser.UserId).SetRawJsonValueAsync(jsonUser).
            ContinueWithOnMainThread(task => {
                if (task.IsCanceled)
                {
                    Debug.LogError("Task cancelled");
                    return;
                }
                if (task.IsFaulted)
                {
                    Debug.LogError("Error writing data " + task.Exception);
                    return;
                }

                Debug.Log("[USER] Created user info in database");
                currentUser = user;
                //OnAutoSignIn();
                FetchLists();

        });
    }

    public void ResetPassword(string email)
    {
        auth.SendPasswordResetEmailAsync(email).ContinueWithOnMainThread(task =>
        {
            if (task.IsCanceled)
            {
                UIHandler.instance.OnResetPasswordError("Reset password cancelled.");
                return;
            }
            if (task.IsFaulted)
            {
                UIHandler.instance.OnResetPasswordError(task.Exception.Message);
                return;
            }

            UIHandler.instance.OnResetPasswordSuccess("Password reset email sent successfully");
            Debug.Log("Email reset succesfully");
        });
    }

    void FetchLists()
    {
        reference.Child("Lists").GetValueAsync().ContinueWithOnMainThread(task => {
            if (task.IsFaulted)
            {
                Debug.LogError("Task failed " + task.Exception);
            }
            else if (task.IsCompleted)
            {
                DataSnapshot snapshot = task.Result;
                IEnumerable<DataSnapshot> lists = snapshot.Children;

                foreach (var list in lists)
                {
                    string owner = list.Child("Owner").Value.ToString();
                    if (owner == currentUser.userID)
                    {
                        AddListToListManager(list);
                    }
                    else{

                        IEnumerable<DataSnapshot> usersAccessForList = list.Child("Owner").Children;

                        foreach (var userID in usersAccessForList)

                        {
                            IEnumerable<DataSnapshot> usersAccessForList = list.Child("UsersAccess").Children;

                            foreach (var userID in usersAccessForList)
                            {
                                if (userID.Value.ToString() == currentUser.userID)
                                {
                                    //add the list to list manager
                                    AddListToListManager(list);
                                    break;
                                }
                            }
                        }
                    }
                }

                ListManager.instance.UpdateCurrentList();

                if (ListManager.instance.AllLists.Count <= 0)
                    CreateEmptyList();
                else
                {
                    UIHandler.instance.LoadListNames();
                }

                Debug.Log("[LISTS] Fetched lists");
                //UIHandler.instance.LoadCurrentList();
                OnAutoSignIn();
            }
        });
    }

    void AddListToListManager(DataSnapshot list)
    {
        List newList = new List(list.Child("Name").Value.ToString());
        newList.Id = list.Key;

        newList.Owner = list.Child("Owner").Value.ToString();

        IEnumerable<DataSnapshot> usersAccessForList = list.Child("UsersAccess").Children;
        foreach (var userID in usersAccessForList)
        {
            string userIDString = userID.Value.ToString();
            newList.AddUserAccess(userIDString);
        }

        var refItems = FirebaseDatabase.DefaultInstance.GetReference("Lists").Child(list.Key).Child("Items");
        refItems.ChildAdded += HandleItemAdded;
        refItems.ChildChanged += HandleItemChanged;
        refItems.ChildRemoved += HandleItemDeleted;

        var refListName = FirebaseDatabase.DefaultInstance.GetReference("Lists").Child(list.Key);
        refListName.ChildChanged += HandleListUpdate;
        refListName.ChildRemoved += HandleListDelete;
        

        ListManager.instance.AllLists.Add(newList);
        
    }
    public void DeleteItem(string itemID)
    {
        reference.Child("Lists").Child(ListManager.instance.currentList.Id).Child("Items").Child(itemID).RemoveValueAsync().ContinueWithOnMainThread(task => {

            if (task.IsCanceled)
            {
                Debug.LogError("Task cancelled");
                return;
            }
            if (task.IsFaulted)
            {
                Debug.LogError("Error writing data " + task.Exception);
                return;
            }

            Debug.Log("[ITEM] Removed item successfully");
        });
    }


    public void HandleItemDeleted(object sender, ChildChangedEventArgs args)
    {
        if (args.DatabaseError != null)
        {
            Debug.LogError(args.DatabaseError.Message);
            return;
        }

        string listKey = args.Snapshot.Reference.Parent.Parent.Key;

        string task = args.Snapshot.Child("task").Value.ToString();
        string checkmark = args.Snapshot.Child("checkmark").Value.ToString();
        string id = args.Snapshot.Child("id").Value.ToString();
        Item newItem = new Item(task, checkmark == "True", id);

        ListManager.instance.RemoveItem(listKey, newItem);
        if (listKey == ListManager.instance.currentList.Id)
            UIHandler.instance.RemoveItem(id);
    }

    void HandleListDelete(object sender, ChildChangedEventArgs args)
    {
        if (args.DatabaseError != null)
        {
            Debug.LogError(args.DatabaseError.Message);
            return;
        }
        if (args.Snapshot.Key.ToString() == "Name")
        {
            string listKey = args.Snapshot.Reference.Parent.Key;
            UIHandler.instance.OnListDeleted(listKey);
            ListManager.instance.RemoveList(listKey);
        }
    }
    void HandleListUpdate(object sender, ChildChangedEventArgs args)
    {
        if (args.DatabaseError != null)
        {
            Debug.LogError(args.DatabaseError.Message);
            return;
        }

        if (args.Snapshot.Key.ToString() == "Name")
        {
            string newName = args.Snapshot.Value.ToString();
            string listKey = args.Snapshot.Reference.Parent.Key;

            Debug.LogFormat("[LIST] NAME UPDATED {0} {1}", newName, listKey);

            ListManager.instance.UpdateListName(listKey, newName);
        }
    }

    public void UpdateListName(string newName)
    {
        string listKey = ListManager.instance.currentList.Id;
        Debug.LogFormat("Updating List Name {0} {1}",newName, listKey);

        if (listKey == null) return;

        reference.Child("Lists").Child(listKey).Child("Name").
            SetValueAsync(newName).ContinueWithOnMainThread(task =>
            {
                if (task.IsCanceled)
                {
                    Debug.LogError("Task cancelled");
                    return;
                }
                if (task.IsFaulted)
                {
                    Debug.LogError("Error writing data " + task.Exception);
                    return;
                }

                Debug.LogFormat("[LIST] List Name Update Complete {0} {1} {2}" ,task.IsCompleted, newName, listKey);
                UIHandler.instance.UpdateListNameInScrollview(listKey, newName);
            });

    }

    public void UpdateItemTask(string itemKey, string task)
    {
        reference.Child("Lists").Child(ListManager.instance.currentList.Id).
            Child("Items").Child(itemKey).Child("task").
           SetValueAsync(task).ContinueWithOnMainThread(task =>
           {
               if (task.IsCanceled)
               {
                   Debug.LogError("Task cancelled");
                   return;
               }
               if (task.IsFaulted)
               {
                   Debug.LogError("Error writing data " + task.Exception);
                   return;
               }

               //update in list as well
               Debug.LogFormat("[ITEM] Item task updated {0} {1}", itemKey, task.IsCompleted);
           });
    }

    public void UpdateItemCheckmark(string itemKey, bool state)
    {
        reference.Child("Lists").Child(ListManager.instance.currentList.Id).
            Child("Items").Child(itemKey).Child("checkmark").
           SetValueAsync(state).ContinueWithOnMainThread(task =>
           {
               if (task.IsCanceled)
               {
                   Debug.LogError("Task cancelled");
                   return;
               }
               if (task.IsFaulted)
               {
                   Debug.LogError("Error writing data " + task.Exception);
                   return;
               }

               //update in list as well
               Debug.LogFormat("[ITEM] Item checkmark updated {0} {1} {2}", itemKey, state, task.IsCompleted);
           });
    }

    void HandleItemAdded(object sender, ChildChangedEventArgs args)
    {
        if (args.DatabaseError != null)
        {
            Debug.LogError(args.DatabaseError.Message);
            return;
        }

        string listKey = args.Snapshot.Reference.Parent.Parent.Key;

        string task = args.Snapshot.Child("task").Value.ToString();
        string checkmark = args.Snapshot.Child("checkmark").Value.ToString();
        string id = args.Snapshot.Child("id").Value.ToString();
        Item newItem = new Item(task, checkmark == "True", id);
        Debug.Log("New item created " + newItem.id);
        ListManager.instance.AddItemToList(newItem, listKey, id);
    }

    void HandleItemChanged(object sender, ChildChangedEventArgs args)
    {
        if (args.DatabaseError != null)
        {
            Debug.LogError(args.DatabaseError.Message);
            return;
        }

        string listKey = args.Snapshot.Reference.Parent.Parent.Key;
        string itemKey = args.Snapshot.Child("id").Value.ToString();
        string task = args.Snapshot.Child("task").Value.ToString();
        bool checkmark = args.Snapshot.Child("checkmark").Value.ToString() == "True";

        Item item = new Item(task, checkmark, itemKey);
        ListManager.instance.UpdateItemInList(listKey, item);
    }

    void OnAutoSignIn()
    {
        Debug.Log("[UI] Switching to main panel");
        UIHandler.instance.UpdateUserName(currentUser.email);
        UIHandler.instance.SwitchToPanel(UIHandler.instance.mainPanel);
        UIHandler.instance.LoadingPanelFadeOut();
    }

    public void SignOut()
    {
        auth.SignOut();
    }

    private void Start()
    {
        Initialize();
    }
    public void CreateEmptyList()
    {
        Debug.Log("[LIST] Creating empty list");

        string listKey = reference.Child("Lists").Push().Key;

        string listName = "NEW LIST";

        Debug.Log("Writing data to " + listName + " at " + listKey + " for " + currentUser.userID);

        List list = new(listName, listKey, currentUser.userID);
        ListManager.instance.currentList = list;

        reference.Child("Lists").Child(listKey).Child("Name").
            SetValueAsync(listName).ContinueWithOnMainThread(task =>
            {
                if (task.IsCanceled)
                {
                    Debug.LogError("Task cancelled");
                    return;
                }
                if (task.IsFaulted)
                {
                    Debug.LogError("Error writing data " + task.Exception);
                    return;
                }

                Debug.Log("[LIST] Write Empty List Successful " + task.IsCompleted);


            });

        reference.Child("Lists").Child(listKey).Child("Owner").SetValueAsync(currentUser.userID).ContinueWithOnMainThread(task =>
            {
                if (task.IsCanceled)
                {
                    Debug.LogError("Task cancelled");
                    return;
                }
                if (task.IsFaulted)
                {
                    Debug.LogError("Error writing data " + task.Exception);
                    return;
                }

                Debug.Log("[USER] Added user data " + task.IsCompleted);

                ListManager.instance.AllLists.Add(list);

                UIHandler.instance.AddList(listName, listKey);

                var refItems = FirebaseDatabase.DefaultInstance.GetReference("Lists").Child(listKey).Child("Items");
                refItems.ChildAdded += HandleItemAdded;
                refItems.ChildChanged += HandleItemChanged;
                refItems.ChildRemoved += HandleItemDeleted;

                var refListName = FirebaseDatabase.DefaultInstance.GetReference("Lists").Child(listKey);
                refListName.ChildChanged += HandleListUpdate;
                refListName.ChildRemoved += HandleListDelete;


                CreateEmptyItem();
            });
    }

    public void CreateEmptyItem()
    {
        Debug.Log("Creating empty item for "+ListManager.instance.currentList.Id);

        string itemKey = reference.Child("Lists").Child(ListManager.instance.currentList.Id).Child("Name").
            Child("Items").Push().Key;

        Debug.Log("Item key " + itemKey);

        Item item = new Item("New task", false, itemKey);
        string itemJson = JsonUtility.ToJson(item);

        Debug.Log("Item json " + itemJson);

        reference.Child("Lists").Child(ListManager.instance.currentList.Id).
            Child("Items").Child(itemKey).SetRawJsonValueAsync(itemJson).ContinueWithOnMainThread(task =>
            {
                if (task.IsCanceled)
                {
                    Debug.LogError("Task cancelled");
                    return;
                }
                if (task.IsFaulted)
                {
                    Debug.LogError("Error writing data " + task.Exception);
                    return;
                }
                Debug.Log("[ITEM] Write Empty Item Successful " + task.IsCompleted);

                //ListManager.instance.currentList.AddItem(item);
            });
    }
    public void OnLogout()
    {
        auth.SignOut();
        PlayerPrefs.DeleteKey("Token");
        UIHandler.instance.SwitchToPanel(UIHandler.instance.signinPanel);
    }

    public void DeleteList(string listKey)
    {
        Debug.LogFormat("[LIST] Deleting list {0} ", listKey);
        reference.Child("Lists").Child(listKey).RemoveValueAsync().ContinueWithOnMainThread(task => {

            if (task.IsCanceled)
            {
                Debug.LogError("Task cancelled");
                return;
            }
            if (task.IsFaulted)
            {
                Debug.LogError("Error writing data " + task.Exception);
                return;
            }

            //UIHandler.instance.OnListDeleted(listKey);
            //ListManager.instance.RemoveList(listKey);
        });
    }
}
