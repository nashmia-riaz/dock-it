import '../App.css'
import FirebaseInit from './FirebaseInit';
import Home from './Home';
import Onboarding from './Onboarding';
import Lists from './Lists';
import { Routes, Route, useNavigate} from "react-router-dom"
import { useEffect } from 'react';
import { useState } from 'react';

function MainPage(){
  const [currentUser, setCurrentUser] = useState(null); 
  const navigate = useNavigate();

  FirebaseInit.auth.onAuthStateChanged(function(user){
    setCurrentUser(user);
  });

  useEffect(() => {
    if (!currentUser) {
      navigate('/');
    }
    else
      navigate('/lists');
  }, [currentUser, navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="onboarding" element={ <Onboarding/> } />
        <Route path="lists" element={<Lists/>}/>
      </Routes>
    </div>
  )
}

export default MainPage