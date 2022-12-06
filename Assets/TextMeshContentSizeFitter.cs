using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class TextMeshContentSizeFitter : MonoBehaviour
{
    [SerializeField]
    bool fitWidth;

    [SerializeField]
    bool fitHeight;

    Bounds currentTextBounds, prevTextBounds;

    TextMeshProUGUI textMesh;

    RectTransform rect;

    float width, height;

    VerticalLayoutGroup parentLayoutGroup;

    // Start is called before the first frame update
    void Awake()
    {
        textMesh = gameObject.GetComponent<TextMeshProUGUI>();
        prevTextBounds = textMesh.textBounds;
        rect = gameObject.GetComponent<RectTransform>();

        Debug.Log(prevTextBounds.size);
    }

    // Update is called once per frame
    void Update()
    {
        if(textMesh.bounds.size.x != prevTextBounds.size.x || textMesh.bounds.size.y != prevTextBounds.size.y)
        {
            width = textMesh.textBounds.size.x;
            height = prevTextBounds.size.y;
            Debug.Log("Width triggered "+width +" "+ height);

        }
            
        rect.sizeDelta = new Vector2(width, height);

        prevTextBounds = textMesh.textBounds;
    }
}
