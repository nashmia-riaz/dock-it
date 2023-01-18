using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Item
{
    public string task;
    public bool checkmark;
    public string id;

    public Item(string task, bool checkmark, string ID)
    {
        this.task = task;
        this.checkmark = checkmark;
        this.id = ID;
    }
}
