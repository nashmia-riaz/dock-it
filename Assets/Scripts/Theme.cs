using UnityEngine;

[CreateAssetMenu(fileName = "Theme", menuName = "ScriptableObjects/Theme", order =1)]
public class Theme : ScriptableObject
{
    public Color PrimaryColor;
    public Color SecondaryColor;
    public Color TextColor;

    public Color FailureColor;
    public Color SuccessColor;
}
