using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class TextMeshManager : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void RebuildLayoutGroup(GameObject layoutGroup)
    {
        LayoutRebuilder.ForceRebuildLayoutImmediate(layoutGroup.GetComponent<RectTransform>());
    }

    public void UpdateTextMeshBounds(TextMeshProUGUI text)
    {
        text.ForceMeshUpdate();
    }
}
