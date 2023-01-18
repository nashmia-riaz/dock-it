using Firebase.Database;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class UIHandler : MonoBehaviour
{
    public static UIHandler instance;

    [SerializeField]
    TMP_InputField emailRegInput, passwordRegInput1, confirmPasswordInput;

    [SerializeField]
    TMP_InputField emailLogInput, passwordLogInput;

    [SerializeField]
    public Animator LoadingPanel, BlurOverlay, Menu;

    [SerializeField]
    TMP_Text loadingText, userName;

    [SerializeField]
    Transform mainPanel, signinPanel, registerPanel;

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
        LoadingPanelFadeIn("FadeIn");
        //FirebaseManager.instance.RegisterUser(email, password); //SWAP LATER
        FirebaseManager.instance.RegisterUser("nash.riaz1995@gmail.com", "nash1995");
    }

    public void OnClickSignIn()
    {
        string email = emailLogInput.text;
        string password = passwordLogInput.text;

        FirebaseManager.instance.SignInUser(email, password);
    }

    public void SwitchToMainPanel()
    {
        mainPanel.gameObject.SetActive(true);
        signinPanel.gameObject.SetActive(false);
        registerPanel.gameObject.SetActive(false);
    }

    public void SwitchToRegisterFromLogin()
    {
        signinPanel.GetComponent<Animator>().SetTrigger("FadeOut");
        StartCoroutine(Helper.waitBeforeExecution(0.5f, () => {
            signinPanel.gameObject.SetActive(false);

            registerPanel.gameObject.SetActive(true);
            registerPanel.GetComponent<Animator>().SetTrigger("FadeIn");
        }));

    }

    public void SwitchToLoginFromRegister()
    {
        registerPanel.GetComponent<Animator>().SetTrigger("FadeOut");
        StartCoroutine(Helper.waitBeforeExecution(0.5f, () => {
            registerPanel.gameObject.SetActive(false);

            signinPanel.gameObject.SetActive(true);
            signinPanel.GetComponent<Animator>().SetTrigger("FadeIn");
        }));
    }

    public void SwitchToRegisterPanel()
    {
        mainPanel.gameObject.SetActive(false);
        signinPanel.gameObject.SetActive(false);
        registerPanel.gameObject.SetActive(true);
    }
    public void SwitchToLoginPanel()
    {
        mainPanel.gameObject.SetActive(false);
        signinPanel.gameObject.SetActive(true);
        registerPanel.gameObject.SetActive(false);
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
}
