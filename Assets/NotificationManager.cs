using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class NotificationManager : MonoBehaviour
{
    public static NotificationManager instance;

    Dictionary<string, UnityEvent> events;

    private void Awake()
    {
        if (instance)
        {
            Destroy(gameObject);
            return;
        }

        instance = this;
        DontDestroyOnLoad(gameObject);

    }

    public void SubscribeToEvent(UnityAction action, string eventName){
        if (!events.ContainsKey(eventName))
        {
            UnityEvent newEvent = new UnityEvent();
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
            events[eventName].Invoke();
        }
    }

    public void CleanupEvents()
    {

    }
}
