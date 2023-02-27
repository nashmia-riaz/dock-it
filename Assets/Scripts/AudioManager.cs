using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioManager : MonoBehaviour
{
    AudioSource soundPlayer;

    [SerializeField]
    SoundDirectory allAudioClips;

    // Start is called before the first frame update
    void Start()
    {
        soundPlayer = GetComponent<AudioSource>();
        NotificationManager.instance.SubscribeToEvent(PlayNotificationAudio, "ShowNotification");
        NotificationManager.instance.SubscribeToEvent(PlayDeleteAudio, "ListDeletion");
        NotificationManager.instance.SubscribeToEvent(PlayDeleteAudio, "ItemDeletion");
        NotificationManager.instance.SubscribeToEvent(PlayCheckAudio, "ItemCheck");
        NotificationManager.instance.SubscribeToEvent(PlaySwipeAudio, "Swiped");
    }

    void PlayDeleteAudio(string msg)
    {
        if (allAudioClips.FindAudioUsingName("Delete") != null)
            soundPlayer.PlayOneShot(allAudioClips.FindAudioUsingName("Delete").clip);
    }

    void PlaySwipeAudio(string msg)
    {
        Debug.Log("Triggered swipe");
        if (allAudioClips.FindAudioUsingName("Swipe") != null)
            soundPlayer.PlayOneShot(allAudioClips.FindAudioUsingName("Swipe").clip);
    }

    void PlayCheckAudio(string msg)
    {
        if (allAudioClips.FindAudioUsingName("Check") != null)
            soundPlayer.PlayOneShot(allAudioClips.FindAudioUsingName("Check").clip);
    }

    void PlayNotificationAudio(string msg)
    {
        if (allAudioClips.FindAudioUsingName("Notification") != null)
            soundPlayer.PlayOneShot(allAudioClips.FindAudioUsingName("Notification").clip);
    }

}
