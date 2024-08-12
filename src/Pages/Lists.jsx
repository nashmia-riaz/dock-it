import FirebaseInit from "./FirebaseInit"
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from 'firebase/database'
import { useNavigate } from "react-router-dom";
import '../Styles/Lists.css'
import Logo from '../assets/Logo.png'

const database = getDatabase();

function Lists(){
    const [lists, setLists] = useState([]);    
    const [currentUser, setUser] = useState(null);
    const [currentItems, setCurrentItems] = useState([]);
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
                        fetchList(database, results[0].id).then((items)=>{
                            const fetchedItems = [];
                            Object.keys(items).forEach(element => {
                                fetchedItems.push(items[element]);
                            });
                            setCurrentItems(fetchedItems);
                        });
                    }));
                });
            };

            fetchLists(currentUser);
        }
    }, [currentUser]);

    return (
        <div>
            <div className="lists-sidebar">
                <div className='app-details'>
                    <div className="logo"><img src={Logo} alt="" /></div>
                    <div className="buymeacoffee"></div>
                    <div className="userDetail" key='user'>{ currentUser ? (currentUser.email) : ''}</div>
                    <div className="logoutButtonContainer"><button className='logoutButton' onClick={handleLogout}>Logout</button></div>
                </div>
                    {lists.map(item => (
                    <div key={item.id}>
                    {item.obj.Name}
                    </div>
                ))}
            </div>
            <div className="mainListView">
                {currentItems.map(item => (
                        <div key={item.id}>
                        {item.task}
                        </div>
                ))}
            </div>
        </div>
    )
}

const fetchList = (database, ID)=>{
    return new Promise((resolveContainer)=>{
         const listsRefID = ref(database, 'Lists/'+ID+'/Items');           

        //first we fetch the ID of the lists this user has access to
        onValue(listsRefID, (snapshot)=>{
            const itemPromises = Object.keys(snapshot.val()).map((itemKey)=>{
                return new Promise((resolve)=>{
                    const itemRef = ref(database, 'Lists/'+ID+'/Items/'+itemKey);
                    onValue(itemRef, (snapshot2)=>{
                        resolve (snapshot2.val());
                    })
                });
            });

            Promise.all(itemPromises).then((results)=>{
                resolveContainer(results);            
            });
        });
    });
};

export default Lists