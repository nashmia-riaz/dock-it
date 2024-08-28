import FirebaseInit from "./FirebaseInit"
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue, onChildChanged } from 'firebase/database'
import { useNavigate } from "react-router-dom";
import '../Styles/Lists.css'
import Logo from '../assets/Logo.png'
import List from './List'

const database = getDatabase();

function Lists(){
    const [lists, setLists] = useState([]);    
    const [currentUser, setUser] = useState(null);
    const [currentList, setCurrentList] = useState([]);

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
            const fetchLists = async(user)=>{
                const listsRefID = ref(database, 'Users/'+user.uid+'/Lists');                
                
                //first we fetch the ID of the lists this user has access to
                await onValue(listsRefID, (snapshot1)=>{
                    const listsPromises = Object.keys(snapshot1.val()).map((listKey)=>{
                            return new Promise((resolve)=>{
                            const listRef = ref(database, 'Lists/'+listKey);
                            onValue(listRef, (snapshot2)=>{
                                resolve({id: listKey, obj:snapshot2.val()});
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

    return (
        <div>
            <div className="lists-sidebar">
                <div className='app-details'>
                    <div className="logo"><img src={Logo} alt="" /></div>
                    <div className="buymeacoffee"></div>
                    <div className="userDetail" key='user'>{ currentUser ? (currentUser.email) : ''}</div>
                    <div className="sidebarButton"><button className='logoutButton' onClick={handleLogout}>Logout</button></div>
                </div>
                <hr className='sidebarBreak'/>
                <div className='listsButtonsSidebar'>
                    <div className="sidebarButton">
                        <button className="createListButton">Create List</button>
                    </div>
                    {lists.map((item) => (
                        <div key={item.id} className={((currentList.id == item.id) ? 'listActive ': '' )+'listButton'} onClick={()=>updateCurrentList(item.id, item.obj.Name)}>
                        {item.obj.Name}
                        </div>
                    ))}
                </div>
            </div>
            {(currentList.id) ? <List data={{database: database, listID: currentList.id, listName:currentList.name}}/> : ''}
        </div>
    )
}


export default Lists