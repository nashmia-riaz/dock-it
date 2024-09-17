import FirebaseInit from "./FirebaseInit"
import { useEffect, useState } from "react";
import { getDatabase, ref, query, onValue, onChildChanged, onChildRemoved, push, child, set, orderByChild, equalTo } from 'firebase/database'
import { useNavigate } from "react-router-dom";
import '../Styles/Lists.css'
import Logo from '../assets/Logo.png'
import List from './List'
import ListOptions from "./ListOptions";
import Helper from "../../Helper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import PopupImportList from './PopupImportList';
import ListsEmpty from "./ListsEmpty";

const database = getDatabase();

function Lists(){
    const [lists, setLists] = useState([]);    
    const [currentUser, setUser] = useState(null);
    const [currentList, setCurrentList] = useState([]);
    const [popupImportVisible, setPopupImportVisible] = useState({isVisible: false});
    const [areListsEmpty, setListsEmpty] = useState(false);

    const navigate = useNavigate();
    const handleLogout = ()=>{
        FirebaseInit.SignOut(navigate);
    }
    useEffect(()=>{
        FirebaseInit.auth.onAuthStateChanged(function(user){
            if(user){
                setUser(user);
            }else{
                FirebaseInit.RedirectLogin(null, navigate);
            }
        });
        
        if(currentUser){
            onChildRemoved(ref(database,'Users/'+currentUser.uid+'/Lists'), (data)=>HandleOnListRemoved(data));
      
            const fetchLists = async(user)=>{
                const listsRefID = ref(database, 'Users/'+user.uid+'/Lists');                
                
                //first we fetch the ID of the lists this user has access to
                await onValue(listsRefID, (snapshot1)=>{
                    if(!snapshot1.val() || Object.keys(snapshot1.val()).length == 0){
                        setListsEmpty(true);
                    }
                    else{
                        setListsEmpty(false);
                        const listsPromises = Object.keys(snapshot1.val()).map((listKey)=>{
                                return new Promise((resolve)=>{
                                const listRef = ref(database, 'Lists/'+listKey);
                                onValue(listRef, (snapshot2)=>{
                                    resolve({id: listKey, obj:snapshot2.val(), userListObj: snapshot1.val()[listKey]});
                                });
                            });
                        });  

                        Promise.all(listsPromises).then((results=>{
                            setLists(results);
                            results.forEach((list)=>{
                                onChildChanged(ref(database, 'Lists/'+list.id), (data)=>HandleOnListChanged(data));
                            })
                            if(results.length > 0)
                                updateCurrentList(results[0].id, results[0].obj.Name);
                        }));
                        
                    }
                });
            };

            fetchLists(currentUser);
        }

    }, [currentUser]);

    const updateCurrentList = (newListID, newListName)=>{
        setCurrentList({id: newListID, name: newListName});
    }

    const HandleOnListChanged = (data)=>{
        if(data.key === 'Name'){
            console.log(data);
            const listID = data.ref.parent.key;
            setLists((prevLists)=>{
                const lists = [...prevLists];
                lists.forEach((list)=>{
                    if(listID === list.id){
                        list.obj.Name = data.val();
                    }
                });
                return lists;
            });
        }
    }

    const HandleOnListRemoved = (data)=>{
        const listID = data.key;
        
        setLists((prevLists)=>{
            const lists = [];
            prevLists.forEach((list)=>{
                if(list.id !== listID)
                    lists.push(list);
            });
            return lists;
        });
    }

    const CreateList = ()=>{
        const shareKey = Helper.generateRandomString(5);
        const listKey = push(child(ref(database, 'Lists'), 'Items')).key;
        const list = {
            Name: 'New List',
            Owner: currentUser.uid,
            ShareKey: shareKey,
        };

        
        set(ref(database, 'Lists/'+listKey), list)
        .then(()=>{
            const userList = {
                isOwner: true,
                shareKey: shareKey
            };

            set(ref(database, 'Users/'+currentUser.uid+'/Lists/'+listKey), userList).then(()=>{}).catch((error)=>console.log(error));
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    const HideListOptions=()=>{
        setListOptions({listID:'', isOwner:false, isVisible: false, position:{left: 0, top: 0}});
    }
    const [listOptions, setListOptions] = useState({list: null, isOwner:false, isVisible: false, position:{left: 0, top: 0}, HideListOptions: HideListOptions});
    const ShowListOptions=(event, list)=>{
        event.stopPropagation();
        setListOptions({list: list, isVisible: true, position: {left: event.clientX, top: event.clientY}, HideListOptions: HideListOptions, database: database, user:currentUser});
    }    

    const ImportList = ()=>{
        setPopupImportVisible({isVisible: true, 
            Message: 'Paste the code below to import a list from your friend!', 
            OnYes: (code)=>{
                const codeQuery = query(ref(database, 'Lists'), orderByChild('ShareKey'), equalTo(code));
                onValue(codeQuery, (snapshot)=>{
                    if(Object.keys(snapshot.val()).length == 1){
                        const listKey = Object.keys(snapshot.val())[0];
                        set(ref(database, 'Lists/'+listKey+'/UsersAccess/'+currentUser.uid), '')
                        .then(()=>{
                            const userList = {
                                isOwner: false,
                                shareKey: code
                            };

                            set(ref(database, 'Users/'+currentUser.uid+'/Lists/'+listKey), userList).then(()=>{}).catch((error)=>console.log(error));
                        })
                        .catch((error)=>{
                            console.log(error);
                        });
                        console.log(Object.keys(snapshot.val())[0]);
                    }
                });
            },
            OnNo: ()=>{
                setPopupImportVisible({isVisible: false, Message: '', OnYes: null, OnNo: null});
        }
        });
    }

    const [showSidebar, setShowSidebar] = useState(false);
    const EnableMenu = (event, enable)=>{
        event.stopPropagation();
        setShowSidebar(enable);
    }

    return (
        <div>
            <div className="showMenuButton"><FontAwesomeIcon icon={faBars} onClick={(event)=>EnableMenu(event, true)}></FontAwesomeIcon></div>
            <div className={(showSidebar ? "showSidebar" : "hideSidebar") + " lists-sidebar"}>
                <div className='app-details'>
                    <div className="logo"><img src={Logo} alt="" /></div>
                    <div className="buymeacoffee"></div>
                    <div className="userDetail" key='user'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{ currentUser ? (currentUser.email) : ''}</div>
                    <div className="sidebarButton"><button className='logoutButton' onClick={handleLogout}>Logout</button></div>
                </div>
                <hr className='sidebarBreak'/>
                <div className='listsButtonsSidebar'>
                    <div className="sidebarButton">
                        <button className="createListButton" onClick={CreateList}>Create List</button>
                        <button className="createListButton" onClick={ImportList}>Import List</button>
                    </div>
                    {lists.map((item) => (
                        <div key={item.id} className={((currentList.id == item.id) ? 'listActive ': 'listInactive ' )+'listButton'} onClick={()=>updateCurrentList(item.id, item.obj.Name)}>
                        <p>{item.obj.Name}</p>
                        <FontAwesomeIcon className='listOptionsButton' onClick={(event)=>ShowListOptions(event, item)} icon={faEllipsis}></FontAwesomeIcon> 
                        </div>
                    ))}
                </div>
            </div>
            {(currentList.id && !areListsEmpty) ? <List data={{database: database, listID: currentList.id, listName:currentList.name}}/> : ''}            
            {areListsEmpty == true ? <ListsEmpty></ListsEmpty> : ''}
            <ListOptions className='listOptions' data={listOptions}></ListOptions>            
            {(popupImportVisible.isVisible) && <PopupImportList data={popupImportVisible}></PopupImportList>}
            {(showSidebar) && <div onClick={(event)=>EnableMenu(event, false)} className={(showSidebar ? 'showSidebar': 'hideSidebar')+' sidebarBackground'}></div>}
        </div>
    )
}


export default Lists