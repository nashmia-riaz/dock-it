using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class List
{
    List<Item> _items;
    List<string> _usersAccess;
    string _id;
    string _name;
    string _owner;
    string _shareKey;

    public List(string name)
    {
        this._name = name;
        _items = new List<Item>();
        _usersAccess = new List<string>();
    }

    public List(string name, string id, string userCreated)
    {
        _items = new List<Item>();
        _usersAccess = new List<string>();

        _name = name;
        _id = id;
        _owner = userCreated;
        _shareKey = Helper.GenerateToken(5);
    }

    public void AddItem(Item item)
    {
        _items.Add(item);
    }

    public void AddUser(string user)
    {
        _usersAccess.Add(user);
    }

    public void RemoveUser(string user)
    {
        _usersAccess.Remove(user);
    }

    public void ClearUsers()
    {
        _usersAccess.Clear();
    }

    public void RemoveItem(Item item) {
        _items.RemoveAll(x => x.id == item.id);
    }

    public int FindItemIndex(string itemKey)
    {
        int index = 0;
        foreach(Item item in _items)
        {
            if (item.id == itemKey)
                return index;
            index++;
        }
        return -1;
    }

    public string Id { get { return _id; } set { _id = value; } }

    public List<Item> Items { get { return _items; } }
    
    public string Name { get { return _name; } set { _name = value; } }

    public string Owner { get { return _owner; } set { _owner = value; } }

    public string ShareKey { get { return _shareKey; } set { _shareKey = value; } }
}
