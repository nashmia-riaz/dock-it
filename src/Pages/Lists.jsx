import FirebaseInit from "./FirebaseInit"
import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from 'firebase/database'
import { useNavigate } from "react-router-dom";

function Lists(){
    const [lists, setLists] = useState([]);
    const addList = (newList)=>{
        
        setLists((prevLists) => {
            var doesListExist = false;
            prevLists.forEach((prevList)=>{
                if(prevList.id === newList.id) {
                    doesListExist = true;
                }
            });
            if(doesListExist)
                return prevLists;
            else
                return [...prevLists, newList];
        });
    };
    const [currentUser, setUser] = useState(null);
    const database = getDatabase();
    const navigate = useNavigate();
    const handleLogout = ()=>{
        FirebaseInit.SignOut(navigate);
    }

    FirebaseInit.auth.onAuthStateChanged(function(user){
        if(user){
            setUser(user);
        }else{
            FirebaseInit.RedirectLogin(null, navigate);
        }
    });

    useEffect(()=>{
        if(currentUser){
            const fetchLists = async(user)=>{
                const listsRefID = ref(database, 'Users/'+user.uid+'/Lists');                
                
                //first we fetch the ID of the lists this user has access to
                await onValue(listsRefID, (snapshot)=>{
                    snapshot.forEach(childSnapshot =>{
                        //then, using those keys, we fetch the individual lists
                        onValue(ref(database, 'Lists/'+childSnapshot.key), (snapshot)=>{
                            addList({id: snapshot.key, obj: snapshot.val()});
                        });
                    });
                });
            };

            fetchLists(currentUser);
        }
        
    }, [currentUser]);

    return (
        <div>
                {lists.map(item => (
                <div key={item.id}>
                {item.obj.Name}
                </div>
            ))}
          <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Lists