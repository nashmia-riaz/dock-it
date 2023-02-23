using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class SwipeDetection : MonoBehaviour, IDragHandler, IBeginDragHandler, IEndDragHandler
{
    Vector2 DragStartPosition;

    const float MaxDragDistance = 200f;

    public Animator swipeAnimator;

    bool isSwiped = false;
    bool isToBeDeleted = false;

    [SerializeField]
    GraphicRaycaster raycaster;
    [SerializeField]
    EventSystem eventSystem;

    PointerEventData pointerData;

    private void Start()
    {
        swipeAnimator = gameObject.GetComponent<Animator>();

        eventSystem = GameObject.FindGameObjectWithTag("EventSystem").GetComponent<EventSystem>();
        raycaster = GameObject.FindGameObjectWithTag("Canvas").GetComponent<GraphicRaycaster>();
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
        if (!isSwiped)
        {
            swipeAnimator.SetTrigger("Swipe");
            isSwiped = true;
        }
    }

    private void Update()
    {
        if (Input.GetMouseButtonDown(0) && isSwiped)
        {
            pointerData = new PointerEventData(eventSystem);
            pointerData.position = Input.mousePosition;

            List<RaycastResult> results = new List<RaycastResult>();
            raycaster.Raycast(pointerData, results);

            foreach(RaycastResult result in results)
            {
                if(result.gameObject.name == "Delete")
                {
                    isToBeDeleted = true;
                    return;
                }
            }

            if (!isToBeDeleted)
            {
                swipeAnimator.SetTrigger("Unfocus");
                isSwiped = false;
            }
        }
    }
}
