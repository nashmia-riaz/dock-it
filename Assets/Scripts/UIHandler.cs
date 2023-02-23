using Firebase.Database;
using System.Collections;
using System.Collections.Generic;
using System.Net.Mail;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class UIHandler : MonoBehaviour
{
    public static UIHandler instance;

    [SerializeField]
    TMP_InputField emailRegInput, passwordRegInput1, passwordRegInput2;

    [SerializeField]
    TMP_InputField emailLogInput, passwordLogInput;

    [SerializeField]
    public Animator LoadingPanel, BlurOverlay, Menu, ResetPasswordPanel, ShareListPanel, ImportListPanel, StartupPanel;

    [SerializeField]
    TMP_Text loadingText, userName;

    public Transform mainPanel, loginPanel, registerPanel, combinedSignupPanel;

    [SerializeField]
    Transform currentPanel;

    [SerializeField]
    TMP_Text loginErrorText, registerErrorText;

    [SerializeField]
    TMP_InputField ListNameInput;

    [SerializeField]
    Transform ListScrollView;

    [SerializeField]
    GameObject ListItemPrefabDark, ListItemPrefabLight, CurrentListItemPrefab, AddItemButton;

    [SerializeField]
    GameObject ListNamePrefabDark, ListNamePrefabLight, CurrentListNamePrefab, ListNameScrollView;

    [SerializeField]
    TMP_Text forgotPasswordErrorText;

    [SerializeField]
    TMP_InputField resetPasswordEmail, shareListLink, importListIF;

    [SerializeField]
    Theme darkTheme, lightTheme, currentTheme;

    [SerializeField]
    Sprite trueCheckmark, emptyCheckmark;

    [SerializeField]
    Button ShareListButton, RevokeAccessButton;

    [SerializeField]
    TMP_Text ImportListErrorText, ShareListErrorText;

    [SerializeField]
    GameObject revokeAccessPanel;

    [SerializeField]
    TMP_Text RevokeAccessError;

    [SerializeField]
    bool isLightTheme;

    [SerializeField]
    GameObject NoListGraphic;

    [SerializeField]
    Animator NotificationAnimator;
    TMP_Text NotificationText;

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

    private void Start()
    {
        isLightTheme = PlayerPrefs.GetString("Theme") == "Light";
        SetTheme();
        UpdateTheme();
    }

    public void LoadingPanelFadeOut()
    {
        LoadingPanel.SetTrigger("FadeOut");

    }

    public void StartupPanelFadeOut()
    {
        StartupPanel.SetTrigger("Start");
    }

    public void LoadingPanelFadeIn(string loadingTextString)
    {
        LoadingPanel.SetTrigger("FadeIn");
        loadingText.text = loadingTextString;
    }

    public void OnClickStart()
    {
        StartupPanel.SetTrigger("FadeOut");

        StartCoroutine(Helper.waitBeforeExecution(1f, ()=> {
            combinedSignupPanel.gameObject.SetActive(true);
            combinedSignupPanel.GetComponent<Animator>().SetTrigger("FadeIn");
        }));

        currentPanel = combinedSignupPanel;
    }

    [SerializeField]
    CanvasGroup loginSwitchButton, signupSwitchButton;
    public void OnSwitchToLogin()
    {
        loginSwitchButton.alpha = 1;
        signupSwitchButton.alpha = 0.5f;

        loginSwitchButton.GetComponent<Button>().interactable = false;
        signupSwitchButton.GetComponent<Button>().interactable = true;

        loginPanel.gameObject.SetActive(true);
        loginPanel.GetComponent<Animator>().SetTrigger("FadeIn");

        registerPanel.GetComponent<Animator>().SetTrigger("FadeOut");
    }

    public void OnSwitchToSignup()
    {
        loginSwitchButton.alpha = 0.5f;
        signupSwitchButton.alpha = 1f;

        loginSwitchButton.GetComponent<Button>().interactable = true;
        signupSwitchButton.GetComponent<Button>().interactable = false;

        registerPanel.gameObject.SetActive(true);
        registerPanel.GetComponent<Animator>().SetTrigger("FadeIn");

        loginPanel.GetComponent<Animator>().SetTrigger("FadeOut");
    }

    public void OnClickSignUp()
    {
        string email = emailRegInput.text;
        string password = passwordRegInput1.text;
        string password2 = passwordRegInput2.text;

        if(password != password2)
        {
            OnRegisterError("Passwords don't match.");
            return;
        }

        LoadingPanelFadeIn("FadeIn");
        FirebaseManager.instance.RegisterUser(email, password); //SWAP LATER
        //FirebaseManager.instance.RegisterUser("nash.riaz1995@gmail.com", "nash1995");
    }

    public void OnClickSignIn()
    {
        string email = emailLogInput.text;
        string password = passwordLogInput.text;

        //if(emaill == null || password == null)

        FirebaseManager.instance.SignInUser(email, password);
    }

    public void OnSignInError(string error)
    {
        loginErrorText.gameObject.SetActive(true);
        loginErrorText.text = error;
        loginErrorText.color = currentTheme.FailureColor;
    }

    public void OnRegisterError(string error)
    {
        registerErrorText.gameObject.SetActive(true);
        registerErrorText.text = error;
        registerErrorText.color = currentTheme.FailureColor;
    }

    public void OnShowResetPasswordPanel()
    {
        ResetPasswordPanel.gameObject.SetActive(true);
        ResetPasswordPanel.SetTrigger("FadeIn");

        BlurOverlay.gameObject.SetActive(true);
    }

    public void OnCloseResetPassword()
    {
        ResetPasswordPanel.SetTrigger("FadeOut");
        BlurOverlay.SetTrigger("FadeOut");

        StartCoroutine(Helper.waitBeforeExecution(0.5f, () => {
            ResetPasswordPanel.gameObject.SetActive(false);
            BlurOverlay.gameObject.SetActive(false);
        }));
    }

    public void OnClickResetPassword()
    {
        string email = resetPasswordEmail.text;
        FirebaseManager.instance.ResetPassword(email);
    }

    public void OnResetPasswordError(string error)
    {
        forgotPasswordErrorText.color = currentTheme.FailureColor;
        forgotPasswordErrorText.text = error;
    }

    public void OnResetPasswordSuccess(string message)
    {
        forgotPasswordErrorText.color = currentTheme.SuccessColor;
        forgotPasswordErrorText.text = message;
    }

    public void SwitchToPanel(Transform nextPanel)
    {
        Animator currentPanelAnimator, nextPanelAnimator;
        nextPanelAnimator = nextPanel.GetComponent<Animator>();

        if (currentPanel != null)
        {
            currentPanelAnimator = currentPanel.GetComponent<Animator>();
            if (currentPanelAnimator)
                currentPanelAnimator.SetTrigger("FadeOut");
        }

        StartCoroutine(Helper.waitBeforeExecution(0.3f, () => {
            nextPanel.gameObject.SetActive(true);

            if(nextPanelAnimator != null)
                nextPanelAnimator.SetTrigger("FadeIn");
        }));

        currentPanel = nextPanel;
    }

    public string GetListName()
    {
        return ListNameInput.text;
    }

    public void OnClickAddItem()
    {
        FirebaseManager.instance.CreateEmptyItem();
    }

    public void AddItem(Item item, string itemKey)
    {
        GameObject listItem = Instantiate(CurrentListItemPrefab, ListScrollView);
        listItem.transform.name = itemKey;
        Debug.LogFormat("Item children {0}", listItem.transform.childCount);
        listItem.transform.SetSiblingIndex(1);

        Image checkmark = listItem.transform.Find("List Details").Find("Check").GetComponent<Image>();
        SetCheckmarkImage(checkmark, item.checkmark);
        
        Button checkmarkButton = listItem.transform.Find("List Details").Find("Check").GetComponent<Button>();
        checkmarkButton.onClick.AddListener(() => {
            OnClickCheckmark(checkmarkButton.gameObject);
        });

        TMP_InputField task = listItem.transform.Find("List Details").Find("Task").GetComponent<TMP_InputField>();
        task.onEndEdit.AddListener(delegate { OnEditTask(task); });

        //if it is ticked
        if (!item.checkmark && checkmark.sprite.name == trueCheckmark.name)
        {
            task.textComponent.color = currentTheme.TextColor * new Color(1, 1, 1, 0.5f);
            task.text = "<s>" + item.task + "</s>";
        }
        else
        {
            listItem.transform.Find("List Details").Find("Task").GetComponent<TMP_InputField>().text = item.task;
        }

        Button deleteButton = listItem.transform.Find("Delete").GetComponent<Button>();
        deleteButton.onClick.AddListener(()=> {
            OnDeleteItem(listItem);
        });

        ListScrollView.GetComponent<VerticalLayoutGroupCustom>().OnChildAdded(listItem.transform);

    }

    void OnDeleteItem(GameObject listItem)
    {
        string itemKey = listItem.name;
        FirebaseManager.instance.DeleteItem(itemKey);
    }

    public void OnEditTask(TMP_InputField inputField)
    {
        string task = inputField.text;
        string itemKey = inputField.transform.parent.parent.name;
        FirebaseManager.instance.UpdateItemTask(itemKey, task);
    }

    public void AddList(ref List list)
    {
        Debug.Log("[LIST NAME OBJ] Creating list name + "+ list.Name + " " +list.Id);
        UpdateListNameCurrent(list.Name);
        GameObject listObj = CreateListName(list);

        GameObject deleteButton = listObj.transform.Find("Delete List").gameObject;

        if (list.Owner == FirebaseManager.instance.currentUser.userID)
        {
            deleteButton.GetComponent<Button>().onClick.AddListener(() =>
            {
                OnClickDeleteListOwned(listObj);
            });
        }
        else
        {
            deleteButton.GetComponent<Button>().onClick.AddListener(() =>
            {
                OnClickDeleteSharedList(listObj);
            });
        }

        SwitchList(listObj, list);
    }

    public void LoadListNames()
    {
        while (ListNameScrollView.transform.childCount > 1)
        {
            DestroyImmediate(ListNameScrollView.transform.GetChild(0).gameObject);
        }

        foreach (List list in ListManager.instance.AllLists)
        {
            Debug.Log("Loading List into UI " + list.Id);
            GameObject listName = CreateListName(list);

            if (list.Id != ListManager.instance.currentList.Id)
            {
                listName.GetComponent<Image>().color = currentTheme.TextColor * new Color(1, 1, 1, 0);
            }

            GameObject deleteButton = listName.transform.Find("Delete List").gameObject;
            bool isOwner = list.Owner == FirebaseManager.instance.currentUser.userID;
            if (isOwner)
            {
                deleteButton.GetComponent<Button>().onClick.AddListener(() =>
                {
                    OnClickDeleteListOwned(listName);
                });

            }
            else
            {
                deleteButton.GetComponent<Button>().onClick.AddListener(() =>
                {
                    OnClickDeleteSharedList(listName);
                });
            }
        }
    }

    public void DeleteCurrentList()
    {
        ClearListItems();
        bool FoundNewList = false;
        for (int i = 0; i < ListNameScrollView.transform.childCount; i++)
        {
            Transform listnameObj = ListNameScrollView.transform.GetChild(i);
            if (ListManager.instance.AllLists.Count > 1)
            {
                FoundNewList = true;
                SwitchList(listnameObj.gameObject, ListManager.instance.currentList);
            }
        }
        if (!FoundNewList)
        {
            NoListGraphic.SetActive(true);
            AddItemButton.gameObject.SetActive(false);
            ShareListButton.gameObject.SetActive(false);
            ListNameInput.gameObject.SetActive(false);
        }
    }
        public void UpdateShareListLink(ref List list)
    {
        shareListLink.text = list.Id + "&" +list.ShareKey;
    }

    public void OnListDeleted(string listKey)
    {
        if (ListManager.instance.currentList != null)
        {
            if (listKey == ListManager.instance.currentList.Id)
            {
                DeleteCurrentList();
            }
        }

        DestroyListName(listKey);

        List list = ListManager.instance.FindListUsingKey(listKey);
        if (list == null) return;

        if(list.Owner != FirebaseManager.instance.currentUser.userID)
        {
            NotificationAnimator.SetTrigger("SlideDown");
            NotificationText.text = "User has removed the list " + list.Name;

            StartCoroutine(Helper.waitBeforeExecution(5, () => {
                NotificationAnimator.SetTrigger("SlideUp");
            }));
        }
    }

    public void RevokeAccess()
    {
        FirebaseManager.instance.RevokeAccess(ListManager.instance.currentList.Id);
        RevokeAccessButton.GetComponent<Animator>().SetTrigger("FadeOut");
    }

    public void UpdateRevokeAccessError(string message, bool status)
    {
        ShareListErrorText.gameObject.SetActive(true);
        ShareListErrorText.color = status ? currentTheme.SuccessColor : currentTheme.FailureColor;
        ShareListErrorText.text = message;
    }

    public void RemoveItem(string itemKey)
    {
        for(int i = 0; i < ListScrollView.childCount; i++)
        {
            Transform item = ListScrollView.GetChild(i);
            if (item.name == itemKey)
            {
                item.GetComponent<Animator>().SetTrigger("FadeOut");
                StartCoroutine(Helper.waitBeforeExecution(0.5f, ()=> {
                    DestroyImmediate(item.gameObject);
                }));
                break;
            }
        }
    }
    public void DestroyListName(string listKey)
    {
        Transform listName = ListNameScrollView.transform.Find(listKey);
        
        if(listName)
            DestroyImmediate(listName.gameObject);
    }

    public void OpenUrl(string url)
    {
        Application.OpenURL(url);
    }

    [SerializeField]
    Animator deletePanel;
    [SerializeField]
    TMP_Text deleteConfirmationText, deleteErrorText;

    [SerializeField]
    Button deleteConfirmationButton, deleteDeclineButton;
    void ShowDeleteConfirmation(string promptText)
    {
        deleteConfirmationText.text = promptText;
        deletePanel.gameObject.SetActive(true);
    }

    public void OnClickDeleteListOwned(GameObject list)
    {
        ShowDeleteConfirmation("Are you sure you want to <b>delete</b> this list completely?<br>This action is irreversible");
        string listKey = list.name;

        deleteConfirmationButton.onClick.RemoveAllListeners();
        deleteConfirmationButton.onClick.AddListener(() =>
        {
            deleteConfirmationButton.interactable = false;
            deleteConfirmationButton.GetComponent<Animator>().SetTrigger("FadeOut");
            deleteDeclineButton.GetComponent<Animator>().SetTrigger("FadeOut");
            FirebaseManager.instance.DeleteList(listKey, true);
        });
      
    }

    public void OnClickDeleteSharedList(GameObject list)
    {
        ShowDeleteConfirmation("Are you sure you want to <b>remove</b> this list from the library?");
        string listKey = list.name;

        deleteConfirmationButton.onClick.RemoveAllListeners();
        deleteConfirmationButton.onClick.AddListener(() =>
        {
            deleteConfirmationButton.interactable = false;
            deleteConfirmationButton.GetComponent<Animator>().SetTrigger("FadeOut");
            deleteDeclineButton.GetComponent<Animator>().SetTrigger("FadeOut");
            FirebaseManager.instance.DeleteListFromUser(FirebaseManager.instance.currentUser.userID, listKey, true);
        });
    }

    public void UpdateListDeletionError(string message, bool isSuccessful)
    { 
        deleteErrorText.text = message;
        deleteErrorText.GetComponent<Animator>().SetTrigger("FadeIn");
        deleteErrorText.color = (isSuccessful) ? currentTheme.SuccessColor : currentTheme.FailureColor;
        deleteErrorText.gameObject.SetActive(true);
       }

    public void OnClickCloseDeleteConfirmation()
    {
        deleteErrorText.gameObject.SetActive(false);
        deletePanel.SetTrigger("Slide Out");
        deleteConfirmationButton.gameObject.SetActive(true);
        deleteDeclineButton.gameObject.SetActive(true);
        deleteConfirmationButton.GetComponent<Animator>().SetTrigger("FadeIn");
        deleteDeclineButton.GetComponent<Animator>().SetTrigger("FadeIn");
        deleteConfirmationButton.interactable = true;
        StartCoroutine(Helper.waitBeforeExecution(0.5f, () => {
            deletePanel.gameObject.SetActive(false);
        }));
    }

    void ClearListItems()
    {
        while (ListScrollView.transform.childCount > 1)
        {
            if (ListScrollView.transform.GetChild(1).name != "Add list Item")
            {
                Debug.Log("[LIST ITEMS] Destroying " + ListScrollView.transform.GetChild(1).name);
                DestroyImmediate(ListScrollView.transform.GetChild(1).gameObject);
                
            }
        }
    }

    public void SwitchList(GameObject listID, List list)
    {
        Debug.Log("[SWITCH LIST] Switching to " + list.Name);

        UpdateListNameCurrent(list.Name);

        ListManager.instance.FindAndSetCurrentList(list.Id);

        //update the UI to reflect current focused list
        for (int i = 0; i < ListNameScrollView.transform.childCount; i++)
        {
            GameObject listNameObj = ListNameScrollView.transform.GetChild(i).gameObject;
            if (listNameObj != listID)
            {
                listNameObj.GetComponent<Image>().color = currentTheme.SecondaryColor * new Color(1, 1, 1, 0);
            }

            listID.GetComponent<Image>().color = currentTheme.SecondaryColor * new Color(1, 1, 1, 1);
        }

        PlayerPrefs.SetString("CurrentList", listID.name);

        SetShareAndRevoke(list);

        LoadCurrentList();
        OnHideMenu();
        NoListGraphic.SetActive(false);
        AddItemButton.gameObject.SetActive(true);
        ShareListButton.gameObject.SetActive(true);
        ListNameInput.gameObject.SetActive(true);
    }

    public void LoadCurrentList()
    {
        ClearListItems();
        if (ListManager.instance.currentList == null)
        {
            //TODO: UI to show that there is no list in the system
            AddItemButton.SetActive(false);
            ListNameInput.text = "NO CURRENT LIST";
            ListNameInput.readOnly = true;
            return;
        }
        ListNameInput.readOnly = false;
        AddItemButton.SetActive(true);
        foreach (Item item in ListManager.instance.currentList.Items)
        {
            AddItem(item, item.id);
        }
    }

    public GameObject CreateListName(List list)
    {
        GameObject listName = Instantiate(CurrentListNamePrefab, ListNameScrollView.transform);
        listName.transform.name = list.Id;
        listName.transform.Find("List Name").GetComponent<TMP_Text>().text = list.Name;
        listName.GetComponent<Button>().onClick.AddListener(() => {
            SwitchList(listName, list);
        });
        Debug.Log("[LIST OBJ] Created list name");
        return listName;
    }

    public void OnClickImportList()
    {
        string[] shareInput = importListIF.text.Split("&");
        if (shareInput.Length <= 1)
        {
            ShowShareListError("Incorrect link!", false);
            return;
        }

        FirebaseManager.instance.ImportList(shareInput[0], shareInput[1]);
    }

    public void ShowShareListError(string message, bool isSuccessful)
    {
        if (!ImportListErrorText.IsActive()) { 
            ImportListErrorText.gameObject.SetActive(true);
            ImportListErrorText.GetComponent<Animator>().SetTrigger("FadeIn"); 
        }
        ImportListErrorText.text = message;
        ImportListErrorText.color = (isSuccessful) ? currentTheme.SuccessColor : currentTheme.FailureColor;

    }

    public void OnShowImportListPanel()
    {
        ImportListPanel.gameObject.SetActive(true);
    }

    public void OnHideImportListPanel()
    {
        ImportListErrorText.GetComponent<Animator>().SetTrigger("FadeOut");
        ImportListPanel.SetTrigger("Slide Out");
        StartCoroutine(Helper.waitBeforeExecution(0.5f, () => {
            ImportListPanel.gameObject.SetActive(false);
        }));
    }

    public void OnShowShareListPanel()
    {
        ShareListPanel.gameObject.SetActive(true);
    }

    public void OnHideShareListPanel()
    {
        ShareListPanel.SetTrigger("Slide Out");
        StartCoroutine(Helper.waitBeforeExecution(0.5f, () => {
            ShareListPanel.gameObject.SetActive(false);
        }));
    }

    public void OnShowMenu()
    {
        Menu.gameObject.SetActive(true);
        BlurOverlay.gameObject.SetActive(true);
    }

    public void OnHideMenu()
    {
        Menu.SetTrigger("Slide Out");
        BlurOverlay.SetTrigger("FadeOut");

        StartCoroutine(Helper.waitBeforeExecution(0.5f, () => {
            Menu.gameObject.SetActive(false);
            BlurOverlay.gameObject.SetActive(false);
        }));
    }

    public void UpdateUserName(string name)
    {
        userName.text = name;
    }

    public void OnClickLogout()
    {
        FirebaseManager.instance.OnLogout();
    }

    public void OnUpdateCurrentListName()
    {
        string newName = ListNameInput.text;

        if(newName != null && newName != "")
            FirebaseManager.instance.UpdateListName(newName);
    }

    public void UpdateListNameInScrollview(List list)
    {
        for (int i = 0; i < ListNameScrollView.transform.childCount; i++)
        {
            Transform childName = ListNameScrollView.transform.GetChild(i);
            if (childName.name == list.Id)
            {
                childName.Find("List Name").GetComponent<TMP_Text>().text = list.Name;

                Button listNameButton = childName.GetComponent<Button>();
                listNameButton.onClick.RemoveAllListeners();
                listNameButton.onClick.AddListener(()=> {
                    SwitchList(childName.gameObject, list);
                });
            }
        }
    }
    public void UpdateRevokeAccessText(string text, bool isSuccessful)
    {
        RevokeAccessError.text = text;
        if (isSuccessful)
            RevokeAccessError.color = currentTheme.SuccessColor;
        else
            RevokeAccessError.color = currentTheme.FailureColor;
    }
    public void SetShareAndRevoke(List list)
    {
        if (list == null)
        {
            if (ListManager.instance.currentList == null) return;
            list = ListManager.instance.currentList;
        }

        if (list.Owner == FirebaseManager.instance.currentUser.userID)
        {
            ShareListButton.interactable = true;
            UpdateShareListLink(ref list);

            revokeAccessPanel.SetActive(true);
            RevokeAccessButton.gameObject.SetActive(true);
            RevokeAccessButton.onClick.RemoveAllListeners();
            RevokeAccessButton.onClick.AddListener(()=> {
                //TODO remove access
                FirebaseManager.instance.RevokeAccess(list.Id);
            });
        }
        else
        {
            ShareListButton.interactable = false;

            revokeAccessPanel.SetActive(false);
        }
    }

    public void UpdateListNameCurrent(string name)
    {
        ListNameInput.text = name;
    }

    void SetCheckmarkImage(Image image, bool state)
    {
        if (!state)
        {
            image.sprite = trueCheckmark;
        }
        else
        {
            image.sprite = emptyCheckmark;
        }
    }

    public void UpdateItem(Item item)
    {
        //first we find the item transform in view
        for(int i = 0; i < ListScrollView.childCount; i++)
        {
            Transform itemObj = ListScrollView.GetChild(i);
            if(itemObj.name == item.id)
            {
                Image checkmark = itemObj.Find("List Details").Find("Check").GetComponent<Image>();
                SetCheckmarkImage(checkmark, item.checkmark);

                TMP_InputField task = itemObj.Find("List Details").Find("Task").GetComponent<TMP_InputField>();
                
                //if it is tickeds
                if (!item.checkmark && checkmark.sprite.name == trueCheckmark.name)
                {
                    task.textComponent.color = currentTheme.TextColor * new Color(1, 1, 1, 0.5f);
                    task.text = "<s>"+ item.task + "</s>";
                    itemObj.SetAsLastSibling();
                }
                else if(item.checkmark && checkmark.sprite.name == emptyCheckmark.name)
                {
                    task.textComponent.color = currentTheme.TextColor;
                    task.text = item.task;
                    itemObj.SetSiblingIndex(1);
                }else 
                { 
                    task.text = item.task; 
                }

                break;
            }
        }
    }

    public void OnClickCheckmark(GameObject checkmarkButton)
    {
        Image checkmarkImage = checkmarkButton.GetComponent<Image>();
        bool state;

        if(checkmarkImage.sprite.name == "Checkmark True")
        {
            state = true;
            checkmarkImage.sprite = emptyCheckmark;
        }
        else
        {
            state = false;
            checkmarkImage.sprite = trueCheckmark;
        }

        FirebaseManager.instance.UpdateItemCheckmark(checkmarkImage.transform.parent.parent.name, state);
    }

    public void OnClickSwitchTheme()
    {
        isLightTheme = !isLightTheme;
        SetTheme();
        UpdateTheme();
    }

    public void SetTheme()
    {
        //if dark theme is current theme
        if (!isLightTheme)
        {
            currentTheme = darkTheme;
            PlayerPrefs.SetString("Theme", "Dark");
        }
        else
        {
            currentTheme = lightTheme;
            PlayerPrefs.SetString("Theme", "Light");
        }

        CurrentListItemPrefab = (isLightTheme) ? ListItemPrefabLight : ListItemPrefabDark;
        CurrentListNamePrefab = (isLightTheme) ? ListNamePrefabLight : ListNamePrefabDark;
    }

    [SerializeField]
    Image ThemeIcon;
    public void UpdateTheme()
    {
        Image[] imageObjects = GameObject.FindObjectsOfType<Image>(true);
        TMP_Text[] textObjects = GameObject.FindObjectsOfType<TMP_Text>(true);

        foreach(var image in imageObjects)
        {
            if(image.tag == "PrimaryUI")
                image.color = currentTheme.PrimaryColor;
            else if(image.tag == "SecondaryUI")
                image.color = currentTheme.SecondaryColor;
            else if (image.tag == "Text")
                image.color = currentTheme.TextColor; 
            else if (image.tag == "Checkmark")
            {
                if(image.sprite.name == "Checkmark False")
                    image.color = currentTheme.TextColor; 
            }
        }

        foreach(var textObj in textObjects)
        {
            if (textObj.tag == "Text")
                textObj.color = currentTheme.TextColor;
        }


        ThemeIcon.sprite = currentTheme.ThemeIcon;
    }
}
