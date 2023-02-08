using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public static class Helper
{
    const string glyphs = "abcdefghijklmnopqrstuvwxyz0123456789"; //add the characters you want

    public delegate void basicFunction();

    public delegate void updateErrorFunction(string message, bool isSuccessful);
    public static IEnumerator waitBeforeExecution(float time, Action toExecute)
    {
        float timer = 0;
        while (timer < time)
        {
            timer += Time.deltaTime;
            yield return null;
        }

        toExecute();
    }

    public static string GenerateToken(int length)
    {
        string token="";
        
        for (int i = 0; i < length; i++)
        {
            token += glyphs[UnityEngine.Random.Range(0, glyphs.Length)];
        }

        return token;
    }
}
