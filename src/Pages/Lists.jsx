import FirebaseInit from "./FirebaseInit"
import { useState } from "react";

function Lists(){
    const [currentUser, setCurrentUser] = useState(null);
    FirebaseInit.auth.onAuthStateChanged(function(user){
        if(user){
            setCurrentUser(user);
        }
    });

    console.log(currentUser);

    return (
    <div id='HomeGradient'>
        <div className='HomeBackground'>
          
        </div>
    </div>
    )
}

export default Lists