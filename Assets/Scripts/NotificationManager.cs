using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class NotificationManager : MonoBehaviour
{
    public static NotificationManager instance;

    Dictionary<string, UnityEvent<string>> events;

    private void Awake()
    {
        if (instance)
        {
            Destroy(gameObject);
            return;
        }

        instance = this;
        DontDestroyOnLoad(gameObject);

        events = new Dictionary<string, UnityEvent<string>>();
    }

    public void SubscribeToEvent(UnityAction<string> action, string eventName){
        if (!events.ContainsKey(eventName))
        {
            UnityEvent<string> newEvent = new UnityEvent<string>();
            events.Add(eventName, newEvent);
            newEvent.AddListener(action);
        }
        else
        {
            events[eventName].AddListener(action);
        }
    }

    public void TriggerEvent(string eventName)
    {
        if (events.ContainsKey(eventName))
        {
            events[eventName].Invoke("");
        }
    }


    public void TriggerEvent(string eventName, string message)
    {
        if (events.ContainsKey(eventName))
        {
            events[eventName].Invoke(message);
        }
    }



    public void CleanupEvents()
    {

    }
}
