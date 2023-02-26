using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public partial class UIHandler : MonoBehaviour
{
    void SetupEvents()
    {
        NotificationManager.instance.SubscribeToEvent(ShowLoginScreen, "ShowLoginScreen");
        NotificationManager.instance.SubscribeToEvent(RegistrationError, "RegistrationError");
        NotificationManager.instance.SubscribeToEvent(SignInError, "LoginError");
        NotificationManager.instance.SubscribeToEvent(OnSignIn, "SignIn");
        NotificationManager.instance.SubscribeToEvent(OnResetPasswordSuccess, "PasswordResetSuccess");
        NotificationManager.instance.SubscribeToEvent(OnResetPasswordError, "PasswordResetFail");
        NotificationManager.instance.SubscribeToEvent(UpdateListDeletionError, "ListDeletionError");
        NotificationManager.instance.SubscribeToEvent(UpdateListDeletionSuccess, "ListDeletionSuccess");
        NotificationManager.instance.SubscribeToEvent(LoadListsOnStart, "LoadListsOnStart");
        NotificationManager.instance.SubscribeToEvent(UpdateRevokeAccessSuccess, "RevokeAccessSuccess");
        NotificationManager.instance.SubscribeToEvent(UpdateRevokeAccessError, "RevokeAccessError");
        NotificationManager.instance.SubscribeToEvent(ShowShareListError, "ShareListError");
        NotificationManager.instance.SubscribeToEvent(RemoveItem, "ItemDeletion");
        NotificationManager.instance.SubscribeToEvent(DeleteList, "ListDeletion");
    }

    void ShowLoginScreen(string message)
    {
        SwitchToPanel(StartupPanel.transform);
        LoadingPanelFadeOut();
    }
    void RegistrationError(string message)
    {
        OnRegisterError("Could not connect");
        LoadingPanelFadeOut();
    }
    void SignInError(string message)
    {
        OnSignInError(message);
        LoadingPanelFadeOut();
    }
    void LoadListsOnStart(string message)
    {
        LoadListNames();
        SetShareAndRevoke(null);
    }
    public void UpdateRevokeAccessError(string text)
    {
        RevokeAccessError.text = text;
        RevokeAccessError.color = currentTheme.FailureColor;
    }

    public void UpdateRevokeAccessSuccess(string text)
    {
        RevokeAccessError.text = text;
        RevokeAccessError.color = currentTheme.SuccessColor;
    }
    public void ShowShareListError(string message)
    {
        if (!ImportListErrorText.IsActive())
        {
            ImportListErrorText.gameObject.SetActive(true);
            ImportListErrorText.GetComponent<Animator>().SetTrigger("FadeIn");
        }
        ImportListErrorText.text = message;
        ImportListErrorText.color = currentTheme.FailureColor;

    }
    public void RemoveItem(string itemKey)
    {
        for (int i = 0; i < ListScrollView.childCount; i++)
        {
            Transform item = ListScrollView.GetChild(i);
            if (item.name == itemKey)
            {
                item.GetComponent<Animator>().SetTrigger("FadeOut");
                StartCoroutine(Helper.waitBeforeExecution(0.5f, () => {
                    DestroyImmediate(item.gameObject);
                }));
                break;
            }
        }
    }
    void DeleteList(string listKey)
    {
        OnListDeleted(listKey);
        ListManager.instance.RemoveList(listKey);
        ListManager.instance.UpdateCurrentList();
        LoadCurrentList();
    }
    void OnSignIn(string email)
    {
        UpdateUserName(email);
        SwitchToPanel(mainPanel);
        LoadingPanelFadeOut();
    }

}
