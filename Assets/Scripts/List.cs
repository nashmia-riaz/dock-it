using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class List
{
    List<Item> _items;
    string _id;
    string _name;
    string _owner;
    List<string> _usersAccess;

    public List(string name)
    {
        this._name = name;
        _items = new List<Item>();
        _usersAccess = new List<string>();
    }

    public List(string name, string id, string userCreated)
    {
        _usersAccess = new List<string>();
        _items = new List<Item>();

        _name = name;
        _id = id;
        _usersAccess.Add(userCreated);
    }

    public void AddItem(Item item)
    {
        _items.Add(item);
    }

    public void RemoveItem(Item item) {
        _items.RemoveAll(x => x.id == item.id);
    }

    public void AddUserAccess(string userId)
    {
        _usersAccess.Add(userId);
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

    public List<string> UsersAccess { get { return _usersAccess; } set { _usersAccess = value; } }

    public List<Item> Items { get { return _items; } }
    
    public string Name { get { return _name; } set { _name = value; } }

    public string Owner { get { return _owner; } set { _owner = value; } }
}
