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
    public Animator LoadingPanel, BlurOverlay, Menu, ResetPasswordPanel, ShareListPanel, ImportListPanel;

    [SerializeField]
    TMP_Text loadingText, userName;

    public Transform mainPanel, signinPanel, registerPanel;

    [SerializeField]
    Transform currentPanel;

    [SerializeField]
    TMP_Text loginErrorText, registerErrorText;

    [SerializeField]
    TMP_InputField ListNameInput;

    [SerializeField]
    Transform ListScrollView;
    [SerializeField]
    GameObject ListItemPrefab;

    [SerializeField]
    GameObject ListNamePrefab, ListNameScrollView;

    [SerializeField]
    TMP_Text forgotPasswordErrorText;

    [SerializeField]
    TMP_InputField resetPasswordEmail, shareListLink, importListIF;

    [SerializeField]
    Color success, fail;

    [SerializeField]
    Sprite trueCheckmark, emptyCheckmark;

    [SerializeField]
    Button ShareListButton;

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

        //currentPanel = signinPanel;
    }

    public void LoadingPanelFadeOut()
    {
        LoadingPanel.SetTrigger("FadeOut");

    }
    public void LoadingPanelFadeIn(string loadingTextString)
    {
        LoadingPanel.SetTrigger("FadeIn");
        loadingText.text = loadingTextString;
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
        loginErrorText.color = fail;
    }

    public void OnRegisterError(string error)
    {
        registerErrorText.gameObject.SetActive(true);
        registerErrorText.text = error;
        registerErrorText.color = fail;
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
        forgotPasswordErrorText.color = fail;
        forgotPasswordErrorText.text = error;
    }

    public void OnResetPasswordSuccess(string message)
    {
        forgotPasswordErrorText.color = success;
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
            //if(currentPanel != null)
            //    currentPanel.gameObject.SetActive(false);

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
        GameObject listItem = Instantiate(ListItemPrefab, ListScrollView);
        listItem.transform.name = itemKey;
        listItem.transform.SetSiblingIndex(listItem.transform.childCount - 2);

        Image checkmark = listItem.transform.Find("List Details").Find("Check").GetComponent<Image>();
        SetCheckmarkImage(checkmark, item.checkmark);
        
        Button checkmarkButton = listItem.transform.Find("List Details").Find("Check").GetComponent<Button>();
        checkmarkButton.onClick.AddListener(() => {
            OnClickCheckmark(checkmarkButton.gameObject);
        });

        TMP_InputField task = listItem.transform.Find("List Details").Find("Task").GetComponent<TMP_InputField>();
        task.onEndEdit.AddListener(delegate { OnEditTask(task); });

        Button deleteButton = listItem.transform.Find("Delete").GetComponent<Button>();
        deleteButton.onClick.AddListener(()=> {
            OnDeleteItem(listItem);
        });

        listItem.transform.Find("List Details").Find("Task").GetComponent<TMP_InputField>().text = item.task;
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
        GameObject listObj = CreateListName(list.Name, list.Id);
        
        if(list.Owner == FirebaseManager.instance.currentUser.userID)
        {
            GameObject deleteButton = listObj.transform.Find("Delete List").gameObject;
            deleteButton.SetActive(true);
            deleteButton.GetComponent<Button>().onClick.AddListener(() =>
            {
                UIHandler.instance.OnClickDeleteList(listObj);
            });
        }
        else
        {
            listObj.transform.Find("Delete List").gameObject.SetActive(false);
        }

        UpdateListNameCurrent(list.Name);
        SwitchList(listObj);
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
            GameObject listName = CreateListName(list.Name, list.Id);

            if (list.Id != ListManager.instance.currentList.Id)
            {
                listName.GetComponent<Image>().color *= new Color(1, 1, 1, 0);
            }

            bool isOwner = list.Owner == FirebaseManager.instance.currentUser.userID;
            if (isOwner)
            {
                UpdateShareListLink(list.Id);
                ShareListButton.interactable = true;

                GameObject deleteButton = listName.transform.Find("Delete List").gameObject;
                deleteButton.SetActive(true);
                deleteButton.GetComponent<Button>().onClick.AddListener(() =>
                {
                    UIHandler.instance.OnClickDeleteList(listName);
                });
            }
            else
            {
                listName.transform.Find("Delete List").gameObject.SetActive(false);
                ShareListButton.interactable = false;
                UpdateShareListLink("");
            }
        }
    }

    public void UpdateShareListLink(string text)
    {
        shareListLink.text = text;
    }

    public void LoadList(List list, bool isOwner)
    {
        GameObject listName = CreateListName(list.Name, list.Id);
        
        if (list.Id != ListManager.instance.currentList.Id)
        {
            listName.GetComponent<Image>().color *= new Color(1, 1, 1, 0);
        }

        if (isOwner)
        {
            GameObject deleteButton = listName.transform.Find("Delete List").gameObject;
            deleteButton.SetActive(true);
            deleteButton.GetComponent<Button>().onClick.AddListener(() =>
            {
                OnClickDeleteList(listName);
            });

            UpdateShareListLink(list.Id);
        }
        else
        {
            listName.transform.Find("Delete List").gameObject.SetActive(false);
            //disable share list link button
            UpdateShareListLink(list.Id);
        }
    }

    public void OnListDeleted(string listKey)
    {
        Debug.LogFormat("Deleting list {0} ", listKey);
        if(listKey == ListManager.instance.currentList.Id)
        {
            while(ListScrollView.transform.childCount > 1)
            {
                GameObject item = ListScrollView.transform.GetChild(0).gameObject;
                if(item)
                    DestroyImmediate(item);
            }
        }

        DestroyListName(listKey);
    }


    public void RemoveItem(string itemKey)
    {
        for(int i = 0; i < ListScrollView.childCount; i++)
        {
            Transform item = ListScrollView.GetChild(i);
            if (item.name == itemKey)
            {
                DestroyImmediate(item.gameObject);
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

    public void OnClickDeleteList(GameObject list)
    {
        string listKey = list.name;
        FirebaseManager.instance.DeleteList(listKey);
    }

    void ClearListItems()
    {
        while (ListScrollView.transform.childCount > 1)
        {
            if (ListScrollView.transform.GetChild(0).name != "Add list Item")
            {
                Debug.Log("[LIST ITEMS] Destroying " + ListScrollView.transform.GetChild(0).name);
                DestroyImmediate(ListScrollView.transform.GetChild(0).gameObject);
                
            }
        }
    }

    public void SwitchList(GameObject listID)
    {
        Debug.Log("[SWITCH LIST] Switching to " + listID.name);

        ClearListItems();
        ListManager.instance.FindAndSetCurrentList(listID.name);

        //update the UI to reflect current focused list
        for (int i = 0; i < ListNameScrollView.transform.childCount; i++)
        {
            GameObject listNameObj = ListNameScrollView.transform.GetChild(i).gameObject;
            if (listNameObj != listID)
            {
                listNameObj.GetComponent<Image>().color *= new Color(1, 1, 1, 0);
            }
            Color listColor = listID.GetComponent<Image>().color;
            listID.GetComponent<Image>().color = new Color(listColor.r, listColor.g, listColor.b, 1);
        }

        PlayerPrefs.SetString("CurrentList", listID.name);

        LoadCurrentList();
        OnHideMenu();
    }

    public void LoadCurrentList()
    {
        Debug.Log(ListManager.instance.currentList);
        foreach(Item item in ListManager.instance.currentList.Items)
        {
            AddItem(item, item.id);
        }
    }

    public GameObject CreateListName(string name, string id)
    {
        GameObject listName = Instantiate(ListNamePrefab, ListNameScrollView.transform);
        listName.transform.name = id;
        listName.transform.Find("List Name").GetComponent<TMP_Text>().text = name;
        listName.GetComponent<Button>().onClick.AddListener(() => {
            UpdateListNameCurrent(name);
            SwitchList(listName);
        });
        Debug.Log("[LIST OBJ] Created list name");
        return listName;
    }

    public void OnClickImportList()
    {
        string listKey = importListIF.text;
        if (listKey != "")
            FirebaseManager.instance.ImportList(listKey);
    }

    public void OnShowImportListPanel()
    {
        ImportListPanel.gameObject.SetActive(true);
    }

    public void OnHideImportListPanel()
    {
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

    public void UpdateListNameInScrollview(string key, string name)
    {
        for(int i = 0; i < ListNameScrollView.transform.childCount; i++)
        {
            Transform childName = ListNameScrollView.transform.GetChild(i);
            if (childName.name == key)
                childName.Find("List Name").GetComponent<TMP_Text>().text = name;
        }
    }

    public void UpdateListNameCurrent(string name)
    {
        ListNameInput.text = name;
    }

    void SetCheckmarkImage(Image image, bool state)
    {
        if (state)
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
                task.text = item.task;

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
            state = false;
            checkmarkImage.sprite = emptyCheckmark;
        }
        else
        {
            state = true;
            checkmarkImage.sprite = trueCheckmark;
        }

        FirebaseManager.instance.UpdateItemCheckmark(checkmarkImage.transform.parent.parent.name, state);
    }
}
