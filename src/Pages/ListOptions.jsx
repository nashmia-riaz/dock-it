import {useEffect, useRef, useState} from 'react';
import { ref, remove } from 'firebase/database'
import Popup from './Popup';
import PopupCode from './PopupCode';

function DeleteList(database, currentUser, list){
    event.stopPropagation(); 
    if(currentUser.uid === list.obj.Owner){
            remove(ref(database, 'Lists/'+list.id)).then(()=>{
                if(list.obj.UsersAccess){
                    Object.keys(list.obj.UsersAccess).map((user)=>{
                        remove(ref(database, 'Users/'+user+'/Lists/'+list.id)).then().catch((error)=>console.log(error));
                    });                        
                }
                remove(ref(database, 'Users/'+currentUser.uid+'/Lists/'+list.id)).then().catch((error)=>console.log(error));
            }).catch((error)=>console.log(error));
    }
}

function RemoveList (database, currentUser, listID){
    remove(ref(database, 'Users/'+currentUser.uid+'/Lists/'+listID))
    .then(()=>{
        remove(ref(database, 'Lists/'+listID+'/UsersAcces/'+currentUser.uid)).then(()=>{}).catch((error)=>console.log(error));
    })
    .catch((error)=>{
      console.log(error);
    });
}

function ListOptions (props){
    const listOptionsDiv = useRef(null);
    const [isVisible, setVisibility] = useState(false);
    const [popup, SetShowPopup] = useState({isVisible: false, Message: '', OnYes: null, OnNo: null});
    const [popupCode, SetShowPopupCode] = useState({isVisible: false, Message: '', OnNo: null});

    useEffect(()=>{
        const handleClickOutside = (event) => {
            // Check if the clicked element is outside the div
            if (listOptionsDiv.current && !listOptionsDiv.current.contains(event.target)) {
              setVisibility(false);
              props.data.HideListOptions();
            }
          };
      
          // Add event listener to the document
          document.addEventListener('click', handleClickOutside);
      
          // Cleanup the event listener on component unmount
          return () => {
            document.removeEventListener('click', handleClickOutside);
          };
    }, []);

    useEffect(()=>{
        setVisibility(props.data.isVisible);
    }, [props.data.isVisible]);
    
    const OnClickDeleteList = (database, user, list) => {
        event.stopPropagation(); 

        SetShowPopup({isVisible: true, Message: 'Are you sure you want to delete this list? This action cannot be undone.', 
            OnYes: ()=>{
                DeleteList(database, user, list);
                SetShowPopup({isVisible: false, Message: '', OnYes: null, OnNo: null});
            }, 
            OnNo: ()=>{
                SetShowPopup({isVisible: false, Message: '', OnYes: null, OnNo: null});
        }});
        setVisibility(false);
        props.data.HideListOptions();
    }

    const OnClickRemoveList = (database, user, listID)=>{
        event.stopPropagation(); 

        SetShowPopup({isVisible: true, Message: 'Are you sure you want to remove this list from your library?', 
            OnYes: ()=>{
                RemoveList(database, user, listID);
                SetShowPopup({isVisible: false, Message: '', OnYes: null, OnNo: null});
            }, 
            OnNo: ()=>{
                SetShowPopup({isVisible: false, Message: '', OnYes: null, OnNo: null});
        }
        });
        setVisibility(false);
        props.data.HideListOptions();
    }
    
    const ShareList = (shareKey) =>{
        event.stopPropagation(); 
        
        SetShowPopupCode({isVisible: true, 
            Message: 'Use the code to share your list with a friend!', 
            ShareKey: shareKey,
            OnNo: ()=>{
                SetShowPopupCode({isVisible: false, Message: '', OnYes: null, OnNo: null});
        }
        });
        setVisibility(false);
        props.data.HideListOptions();
    }

    return(
        <div>
            <div ref={listOptionsDiv}>
            {(isVisible) && 
                <div  className="listOptions" style={{left: `${props.data.position.left}px`, top:`${props.data.position.top}px`}}>
                    {props.data.list.userListObj.isOwner && <div className="listOption" onClick={()=>{ShareList(props.data.list.userListObj.shareKey)}}>Share</div>}
                    {props.data.list.userListObj.isOwner && <div className='listOption' onClick={()=>{OnClickDeleteList(props.data.database, props.data.user, props.data.list)}}>Delete</div>}
                    {!props.data.list.userListObj.isOwner && <div className='listOption' onClick={()=>{OnClickRemoveList(props.data.database, props.data.user, props.data.list.id)}}>Remove</div>}
                </div>}
            </div>
            {(popup.isVisible) && <Popup data={popup}></Popup>}
            {(popupCode.isVisible) && <PopupCode data={popupCode}></PopupCode>}
        </div>
    )
    
}

ListOptions.displayName = 'ListOptions';

export default ListOptions;