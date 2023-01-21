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
    public Animator LoadingPanel, BlurOverlay, Menu, ResetPasswordPanel;

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
    Sprite checkmarkTick, checkmarkEmpty;

    [SerializeField]
    TMP_Text forgotPasswordErrorText;

    [SerializeField]
    TMP_InputField resetPasswordEmail;

    [SerializeField]
    Color success, fail;

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

        listItem.transform.Find("List Details").Find("Check").GetComponent<Image>().sprite = (item.checkmark == true) ? checkmarkTick : checkmarkEmpty;
        listItem.transform.Find("List Details").Find("InputField (TMP)").GetComponent<TMP_InputField>().text = item.task;
        
    }

    public void AddList(string listName, string listID)
    {
        Debug.Log("[LIST NAME OBJ] Creating list name + "+ listName + " " +listID);
        GameObject listObj = CreateListName(listName, listID);
        SwitchList(listObj);
    }

    public void LoadLists()
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
        }
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
            SwitchList(listName);
        });
        Debug.Log("[LIST OBJ] Created list name");
        return listName;
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
}
