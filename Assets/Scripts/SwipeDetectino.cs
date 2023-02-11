using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;

public class SwipeDetectino : MonoBehaviour, IDragHandler, IBeginDragHandler, IEndDragHandler
{
    Vector2 DragStartPosition;

    const float MaxDragDistance = 200f;

    public Animator swipeAnimator;

    bool isSwiped =false;

    private void Start()
    {
        swipeAnimator = gameObject.GetComponent<Animator>();
    }
    public void OnBeginDrag(PointerEventData eventData)
    {
        DragStartPosition = eventData.position;
    }

    public void OnDrag(PointerEventData eventData)
    {
        Vector2 currentPosition = eventData.position;
        if (Mathf.Abs(Vector2.Distance(DragStartPosition, currentPosition)) > MaxDragDistance && !isSwiped)
        {
            swipeAnimator.SetTrigger("Swipe");
            isSwiped = true;
        }
    }
    public void OnEndDrag(PointerEventData eventData)
    {
        throw new System.NotImplementedException();
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0) && isSwiped)
        {
            swipeAnimator.SetTrigger("Unfocus");
            isSwiped = false;
        }
    }
}
