using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ListManager : MonoBehaviour
{
    public static ListManager instance;

    public List currentList;

    public List<List> AllLists = new();

    [SerializeField]
    bool rorderList = true;

    private void Awake()
    {
        if (instance == null)
            instance = this;
        else
            Destroy(this.gameObject);
    }

    public void FindAndSetCurrentList(string ID)
    {
        foreach (List list in AllLists)
        {
            if (list.Id == ID)
            {
                Debug.Log("[LIST MANAGER] Current list updated to " + ID);
                currentList = list;
                return;
            }
        }
    }

    public void UpdateCurrentList()
    {
        if (currentList != null) return;

        Debug.Log("[LIST MANAGER] Updating current list");

        if (PlayerPrefs.GetString("CurrentList") != null)
        {
            Debug.Log("[LIST MANAGER] Playerprefs has saved setting");
            foreach (List list in AllLists)
            {
                if (list.Id == PlayerPrefs.GetString("CurrentList"))
                {
                    Debug.LogFormat("[LIST MANAGER] List found with ID {0}", list.Id);
                    this.currentList = list;
                    UIHandler.instance.UpdateListNameCurrent(list.Name);
                    return;
                }
            }

            Debug.Log("[LIST MANAGER] List not found");
        }
        if (AllLists.Count > 0)
        {
            currentList = AllLists[0];
            PlayerPrefs.SetString("CurrentList", currentList.Id);
            UIHandler.instance.UpdateListNameCurrent(currentList.Name);
            Debug.Log("[LIST MANAGER] No list found. Setting to first");
            return;
        }

        currentList = null;
    }

    public List FindListUsingKey(string key)
    {
        List toFind = null;
        foreach(List list in AllLists)
        {
            if(list.Id == key)
            {
                toFind = list;
                break;
            }
        }
        return toFind;
    }

    public void AddItemToList(Item item, string listKey, string itemKey)
    {
        if (item == null)
            return;

        List list = FindListUsingKey(listKey);
        if (list == null) return;

        list.AddItem(item);

        if (list == currentList)
        {
            UIHandler.instance.AddItem(item, itemKey);
        }
    }

    public List UpdateListName(string listKey, string listName)
    {
        if (listKey == null || listName == null)
            return null;

        List list = FindListUsingKey(listKey);
        if (list == null) return null;

        list.Name = listName;
        UIHandler.instance.UpdateListNameInScrollview(list);

        if (list == currentList)
        {
            UIHandler.instance.UpdateListNameCurrent(listName);
            return list;
        }

        return null;
    }

    public void UpdateItemInList(string listKey, Item item)
    {
        if (listKey == null || item == null)
            return;

        List list = FindListUsingKey(listKey);
        if (list == null) return;

        int itemIndex = list.FindItemIndex(item.id);

        if(itemIndex >= 0)
        {
            if (list == currentList)
                UIHandler.instance.UpdateItem(item);

            list.Items[itemIndex] = item;
        }
    }

    public void RemoveList(string key)
    {
        foreach(List list in AllLists)
        {
            if(list.Id == key)
            {
                AllLists.Remove(list);
                break;
            }
        }

        if (currentList == null) return;

        if (key == currentList.Id)
        {
            currentList = null;
        }
    }

    public void RemoveItem(string listKey, Item item)
    {
        List list = FindListUsingKey(listKey);
        
        if(list != null)
            list.RemoveItem(item);

    }
}
