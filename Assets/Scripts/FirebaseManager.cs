using Firebase.Extensions;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Firebase.Database;
using Firebase.Auth;
using Firebase;
using System.Threading.Tasks;
using System;

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

                //disable loading panel
                refreshToken = PlayerPrefs.GetString("Token");

                //if refreshtoken exists, fetch one from server and compare
                if (refreshToken != "")
                {
                    Debug.Log("[SIGN IN] Token exists");
                    GetUserBasedOnToken(refreshToken, ()=> {
                        if (currentUser != null && currentUser.userToken == refreshToken)
                        {
                            Debug.Log("[USER] Signed in using token " + currentUser.userToken);
                            FetchLists();
                        }
                        else
                        {
                            Debug.Log("[SIGN IN] Current user is null");

                            NotificationManager.instance.TriggerEvent("ShowLoginScreen");
                        }
                    });
                }
                else
                {
                    NotificationManager.instance.TriggerEvent("ShowLoginScreen");
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
                NotificationManager.instance.TriggerEvent("RegistrationError", "Could not connect");

                return;
            }
            if (task.IsFaulted)
            {
                NotificationManager.instance.TriggerEvent("RegistrationError", task.Exception.InnerException.GetBaseException().Message);
                return;
            }

            // Firebase user has been created.
            FirebaseUser newUser = task.Result;
            Debug.LogFormat("Firebase user created successfully: {0} ({1})",
                newUser.DisplayName, newUser.UserId);

            OnRegister(12, newUser, ()=> {
                CreateEmptyList();
            });

        });
    }

    public void SignInUser(string email, string password)
    {
        UIHandler.instance.LoadingPanelFadeIn("Signing in...");
        var taskScheduler = TaskScheduler.FromCurrentSynchronizationContext();
        auth.SignInWithEmailAndPasswordAsync(email, password).ContinueWith(task => {
            if (task.IsCanceled)
            {
                NotificationManager.instance.TriggerEvent("LoginError", "Could not connect");
                return;
            }
            if (task.IsFaulted)
            {
                NotificationManager.instance.TriggerEvent("LoginError", task.Exception.InnerException.GetBaseException().Message);
                return;
            }

            FirebaseUser newUser = task.Result;
            Debug.LogFormat("User signed in successfully: {0} ({1})",
                newUser.DisplayName, newUser.UserId);
            currentUser = new User(email, "", "");
            OnSignIn(12, newUser, taskScheduler);
        }, taskScheduler);
    }

    void OnRegister(int tokenSize, FirebaseUser firebaseUser, Action executeAtEnd)
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
                FetchLists();
            });
    }

    void OnSignIn(int tokenSize, FirebaseUser firebaseUser, TaskScheduler taskScheduler)
    {
        refreshToken = Helper.GenerateToken(tokenSize);
        PlayerPrefs.SetString("Token", refreshToken);
        Debug.Log("Generated new token " + refreshToken);

        User user = new User(firebaseUser.Email, firebaseUser.UserId, refreshToken);
        
        reference.Child("Users").Child(firebaseUser.UserId).Child("userToken").SetValueAsync(refreshToken).
            ContinueWith(task => {
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
                FetchLists();
        }, taskScheduler);
    }

    public void ResetPassword(string email)
    {
        auth.SendPasswordResetEmailAsync(email).ContinueWithOnMainThread(task =>
        {
            if (task.IsCanceled)
            {
                NotificationManager.instance.TriggerEvent("PasswordResetFail", "Reset password cancelled.");
                return;
            }
            if (task.IsFaulted)
            {
                NotificationManager.instance.TriggerEvent("PasswordResetFail", task.Exception.Message);
                return;
            }

            NotificationManager.instance.TriggerEvent("PasswordResetSuccess");
            Debug.Log("Email reset succesfully");
        });
    }

    public void DeleteListFromUser(string userID, string listKey, bool updateUI)
    {
        reference.Child("Users").Child(userID).Child("Lists").Child(listKey).RemoveValueAsync().ContinueWithOnMainThread(task=> {
            if (task.IsCanceled)
            {
                NotificationManager.instance.TriggerEvent("ListDeletionFailure", "Error: Could not delete list");
                return;
            }
            if (task.IsFaulted)
            {
                NotificationManager.instance.TriggerEvent("ListDeletionFailure", task.Exception.Message);
                return;
            }

            if (updateUI)
                NotificationManager.instance.TriggerEvent("ListDeletionSuccess", "List removed successfully!");
        });
    }

    void FetchLists()
    {
        var taskScheduler = TaskScheduler.FromCurrentSynchronizationContext();
        reference.Child("Users").Child(currentUser.userID).Child("Lists").GetValueAsync().ContinueWith(UserLists => {
            if (UserLists.IsFaulted)
            {
                Debug.LogError("Task failed " + UserLists.Exception);
            }
            else if (UserLists.IsCompleted)
            {
                DataSnapshot snapshot = UserLists.Result;
                IEnumerable<DataSnapshot> lists = snapshot.Children;
                if(snapshot.ChildrenCount <= 0)
                {
                    CreateEmptyList();

                    ListManager.instance.UpdateCurrentList();

                    Debug.Log("[LISTS] Fetched lists");
                    OnAutoSignIn();
                    return;
                }
                long totalLists = snapshot.ChildrenCount;
                int listProcessed = 0;

                foreach(var list in lists)
                {
                    string listKey = list.Key.ToString();
                    string shareky = list.Child("shareKey").Value.ToString();
                    bool isOwner = list.Child("isOwner").Value.ToString() == "True";
                    reference.Child("Lists").Child(listKey).GetValueAsync().ContinueWith(listTask => {

                        if (listTask.IsFaulted)
                        {
                            Debug.LogError("Task failed " + listTask.Exception);
                        }
                        else if (listTask.IsCompleted)
                        {
                            DataSnapshot listSnapshot = listTask.Result;
                            if (listSnapshot.Child("ShareKey").Value.ToString() == shareky)
                                AddListToListManager(listSnapshot);
                            else if(listSnapshot.Child("ShareKey").Value.ToString() != shareky 
                            && !isOwner)
                            {
                                DeleteListFromUser(currentUser.userID, listKey, false);
                            }
                            Debug.Log("Getting list " + listSnapshot.Child("Name").Value.ToString());
                            listProcessed++;

                            if (listProcessed == totalLists)
                            {
                                ListManager.instance.UpdateCurrentList();

                                if (ListManager.instance.AllLists.Count <= 0)
                                    CreateEmptyList();
                                else
                                {
                                    NotificationManager.instance.TriggerEvent("LoadListsOnStart");
                                }

                                Debug.Log("[LISTS] Fetched lists");
                                OnAutoSignIn();
                            }
                        }

                    }, taskScheduler);
                }
            }
        }, taskScheduler);
    }

    public void RevokeAccess(string listKey)
    {
        string newKey = Helper.GenerateToken(5);
        var taskScheduler = TaskScheduler.FromCurrentSynchronizationContext();
        reference.Child("Lists").Child(listKey).Child("ShareKey").SetValueAsync(newKey).ContinueWith(task=> {
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

            reference.Child("Users").Child(currentUser.userID).Child("Lists").Child(listKey).Child("shareKey").SetValueAsync(newKey).ContinueWith(userSK=>{
                if (userSK.IsCanceled)
                {
                    NotificationManager.instance.TriggerEvent("RevokeAccessError", "Error: Could not revoke access");
                    return;
                }
                if (userSK.IsFaulted)
                {
                    NotificationManager.instance.TriggerEvent("RevokeAccessError", task.Exception.Message);
                    return;
                }

                NotificationManager.instance.TriggerEvent("RevokeAccessSuccess", "Revoked Access Successfully");
            }, taskScheduler);

        }, taskScheduler);
    }

    List AddListToListManager(DataSnapshot list)
    {
        List newList = new List(list.Child("Name").Value.ToString());
        newList.Id = list.Key;

        newList.Owner = list.Child("Owner").Value.ToString();
        newList.ShareKey = list.Child("ShareKey").Value.ToString();

        AttachFirebaseFunctions(newList.Id);
        ListManager.instance.AllLists.Add(newList);

        IEnumerable<DataSnapshot> users = list.Child("UsersAccess").Children;
        foreach(DataSnapshot user in users)
        {
            newList.AddUser(user.Key.ToString());
        }

        return newList;
    }

    public void ImportList(string listKey, string shareKey)
    {
        //TODO: check if list is already in the system before pursuing
        if(ListManager.instance.FindListUsingKey(listKey) != null)
        {
            NotificationManager.instance.TriggerEvent("ShareListError", "List is already imported");
            return;
        }

        var taskScheduler = TaskScheduler.FromCurrentSynchronizationContext();
        reference.Child("Lists").Child(listKey).GetValueAsync().ContinueWith(task => {
            if (task.IsFaulted)
            {
                Debug.LogError("Task failed " + task.Exception);
            }
            else if (task.IsCompleted)
            {
                if (shareKey != task.Result.Child("ShareKey").Value.ToString())
                {
                    NotificationManager.instance.TriggerEvent("ShareListError", "Invalid link!");
                    return;
                }
                UserListInfo listInfo = new UserListInfo(shareKey, false);
                reference.Child("Users").Child(currentUser.userID).Child("Lists").Child(listKey).SetRawJsonValueAsync(JsonUtility.ToJson(listInfo)).ContinueWith(listTask=> {
                    if (listTask.IsCanceled)
                    {
                        Debug.LogError("Task cancelled");
                        NotificationManager.instance.TriggerEvent("ShareListError", "Could not retrieve list!");
                        return;
                    }
                    if (listTask.IsFaulted)
                    {
                        NotificationManager.instance.TriggerEvent("ShareListError", task.Exception.InnerException.GetBaseException().Message);
                        return;
                    }

                    DataSnapshot list = task.Result;
                    List newList = AddListToListManager(list);
                    UIHandler.instance.AddList(ref newList);
                    UIHandler.instance.OnHideImportListPanel();
                }, taskScheduler);
            }
        }, taskScheduler);

        reference.Child("Lists").Child(listKey).Child("UsersAccess").Child(currentUser.userID).SetValueAsync(" ").
            ContinueWith(task =>
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

                Debug.Log("[LIST] Added current user to lists users");

            });
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

    void AttachFirebaseFunctions(string listKey)
    {
        var refItems = FirebaseDatabase.DefaultInstance.GetReference("Lists").Child(listKey).Child("Items").OrderByChild("checkmark");
        refItems.ChildAdded += HandleItemAdded;
        refItems.ChildChanged += HandleItemChanged;
        refItems.ChildRemoved += HandleItemDeleted;

        var refListName = FirebaseDatabase.DefaultInstance.GetReference("Lists").Child(listKey);
        refListName.ChildChanged += HandleListUpdate;
        refListName.ChildRemoved += HandleListDelete;

        var refUserList = FirebaseDatabase.DefaultInstance.GetReference("Users").Child(currentUser.userID).
            Child("Lists");
        refUserList.ChildRemoved += HandleListRemovedFromUser;
    }

    void DetachFirebaseFunction(string listKey)
    {
        var refItems = FirebaseDatabase.DefaultInstance.GetReference("Lists").Child(listKey).Child("Items").OrderByChild("checkmark");
        refItems.ChildAdded -= HandleItemAdded;
        refItems.ChildChanged -= HandleItemChanged;
        refItems.ChildRemoved -= HandleItemDeleted;

        var refListName = FirebaseDatabase.DefaultInstance.GetReference("Lists").Child(listKey);
        refListName.ChildChanged -= HandleListUpdate;
        refListName.ChildRemoved -= HandleListDelete;

        var refUserList = FirebaseDatabase.DefaultInstance.GetReference("Users").Child(currentUser.userID).
            Child("Lists");
        refUserList.ChildRemoved -= HandleListRemovedFromUser;
    }

    public void HandleItemDeleted(object sender, ChildChangedEventArgs args)
    {
        if (args.DatabaseError != null)
        {
            Debug.LogError(args.DatabaseError.Message);
            return;
        }

        if (args.Snapshot.Reference.Parent.Key == "Items")
        {
            string listKey = args.Snapshot.Reference.Parent.Parent.Key;

            string task = args.Snapshot.Child("task").Value.ToString();
            string checkmark = args.Snapshot.Child("checkmark").Value.ToString();
            string id = args.Snapshot.Child("id").Value.ToString();
            Item newItem = new Item(task, checkmark == "True", id);

            ListManager.instance.RemoveItem(listKey, newItem);

            if (ListManager.instance.currentList == null) return;
            if (listKey == ListManager.instance.currentList.Id)
                //UIHandler.instance.RemoveItem(id);
                NotificationManager.instance.TriggerEvent("ItemDeletion", id);
        }
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
            NotificationManager.instance.TriggerEvent("ListDeletion", listKey);
            DetachFirebaseFunction(listKey);
            //UIHandler.instance.OnListDeleted(listKey);
            //ListManager.instance.RemoveList(listKey);
            //ListManager.instance.UpdateCurrentList();
            //UIHandler.instance.LoadCurrentList();
        }
    }

    public void HandleListRemovedFromUser(object sender, ChildChangedEventArgs args)
    {
        if (args.DatabaseError != null)
        {
            Debug.LogError(args.DatabaseError.Message);
            return;
        }

        if (args.Snapshot.Reference.Parent.Key.ToString() == "Lists")
        {
            string listKey = args.Snapshot.Key;
            NotificationManager.instance.TriggerEvent("ListDeletion", listKey);
            DetachFirebaseFunction(listKey);
            //UIHandler.instance.OnListDeleted(listKey);
            //ListManager.instance.RemoveList(listKey);
            //ListManager.instance.UpdateCurrentList();
            //UIHandler.instance.LoadCurrentList();
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
        else if (args.Snapshot.Key.ToString() == "ShareKey")
        {
            string listKey = args.Snapshot.Reference.Parent.Key;
            List list = ListManager.instance.FindListUsingKey(listKey);
            if (list == null) return;

            if (list.Owner == currentUser.userID) { 
                //TODO update UI to show access revoked
                return;
            }
            NotificationManager.instance.TriggerEvent("ListDeletion", listKey);
            DetachFirebaseFunction(listKey);
            //UIHandler.instance.OnListDeleted(listKey);
            //ListManager.instance.RemoveList(listKey);
            //ListManager.instance.UpdateCurrentList();
            //UIHandler.instance.LoadCurrentList();
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

                List list = ListManager.instance.UpdateListName(listKey, newName);
                Debug.LogFormat("[LIST] List Name Update Complete {0} {1} {2}" ,task.IsCompleted, newName, listKey);
                UIHandler.instance.UpdateListNameInScrollview(list);
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
        //Debug.Log("[UI] Switching to main panel");
        //UIHandler.instance.UpdateUserName(currentUser.email);
        //UIHandler.instance.SwitchToPanel(UIHandler.instance.mainPanel);
        //UIHandler.instance.LoadingPanelFadeOut();
        NotificationManager.instance.TriggerEvent("SignIn");
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

        UserListInfo listInfo = new UserListInfo(list.ShareKey, true);
        reference.Child("Users").Child(currentUser.userID).Child("Lists").Child(listKey).SetRawJsonValueAsync(JsonUtility.ToJson(listInfo)).ContinueWithOnMainThread(task=> {

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

            Debug.Log("[USER] Added list to user" + task.IsCompleted);

        });

        reference.Child("Lists").Child(listKey).Child("ShareKey").SetValueAsync(list.ShareKey)
            .ContinueWithOnMainThread(task => {
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

                Debug.Log("[LIST] Share key added " +list.ShareKey);
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

                UIHandler.instance.AddList(ref list);

                AttachFirebaseFunctions(list.Id);

                CreateEmptyItem();
            });
    }

    public void CreateEmptyItem()
    {
        Debug.Log("Creating empty item for "+ListManager.instance.currentList.Id);

        string itemKey = reference.Child("Lists").Child(ListManager.instance.currentList.Id).Child("Name").
            Child("Items").Push().Key;

        Debug.Log("Item key " + itemKey);

        Item item = new Item("New task", true, itemKey);
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

            });
    }
    public void OnLogout()
    {
        auth.SignOut();
        PlayerPrefs.DeleteKey("Token");
        ListManager.instance.ClearAll();
    }

    public void DeleteList(string listKey, bool updateUI)
    {
        Debug.LogFormat("[LIST] Deleting list {0} ", listKey);

        List list = ListManager.instance.FindListUsingKey(listKey);
        if(list != null)
        {
        }

        DeleteListFromUser(currentUser.userID, listKey, false);

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

            if (updateUI)
                NotificationManager.instance.TriggerEvent("ListDeletionSuccess", "List <b>deleted</b> successfully!");
        });
    }
}

struct UserListInfo{
    public string shareKey;
    public bool isOwner;

    public UserListInfo(string mShareKey, bool mIsOwner)
    {
        shareKey = mShareKey;
        isOwner = mIsOwner;
    }
}