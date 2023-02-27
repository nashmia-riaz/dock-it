using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[CreateAssetMenu(fileName = "SoundDirectory", menuName = "ScriptableObjects/SFX", order = 2)]
public class SoundDirectory : ScriptableObject
{
    public List<AudioFile> audioFiles;

    public AudioFile FindAudioUsingName(string name)
    {
        AudioFile audio = null;

        foreach(AudioFile audioFile in audioFiles)
        {
            if(audioFile.fileName == name)
            {
                audio = audioFile;
                break;
            }
        }

        return audio;
    }
}

[Serializable]
public class AudioFile
{
    public string fileName;
    public AudioClip clip;
}