using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[ExecuteAlways]
public class VerticalLayoutGroupCustom : MonoBehaviour
{
    [SerializeField]
    List<Transform> children;

    [SerializeField]
    float Spacing;

    // Start is called before the first frame update
    void OnEnable()
    {
        UpdateChildren();
        CalculateChildrenSpacing(0);
    }

    private void Reset()
    {
        UpdateChildren();
    }

    void UpdateChildren()
    {
        children.Clear();
        for (int i = 0; i < transform.childCount; i++)
        {
            children.Add(transform.GetChild(i));
        }
    }

    public void OnChildAdded(Transform child)
    {
        if (children.Count < 1) 
            children.Add(child);
        else
            children.Insert(1, child);

        CalculateChildrenSpacing(1);
    }

    void CalculateChildrenSpacing(int startIndex)
    {
        if (startIndex >= children.Count) return;
        float currentYPosition = (startIndex > 0) ? children[startIndex-1].position.y : 0;
        for(int i = startIndex; i < children.Count; i++)
        {
            float childHeight = children[i].GetComponent<RectTransform>().rect.height;
            float previousChildHeight = (startIndex > 0) ? children[i - 1].GetComponent<RectTransform>().sizeDelta.y / 2 : 0;
            currentYPosition = currentYPosition + Spacing + childHeight + previousChildHeight;
            Debug.Log(childHeight);
            Vector3 newPosition = new Vector3(children[i].position.x, -currentYPosition, children[i].position.z);
            StartCoroutine(MoveChildToNewPosition(children[i], newPosition, 0.5f));

        }
    }

    IEnumerator MoveChildToNewPosition(Transform child, Vector3 newPosition, float transitionTime)
    {
        float elapsedTime = 0;
        Vector3 initialPosition = child.position;

        while(elapsedTime <= transitionTime)
        {
            elapsedTime += Time.deltaTime;
            Vector3 interpolatedPosition = Vector3.Lerp(initialPosition, newPosition, elapsedTime / transitionTime);
            child.GetComponent<RectTransform>().anchoredPosition = interpolatedPosition;
            yield return null;
        }
    }
}
