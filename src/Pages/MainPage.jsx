import '../App.css'
import FirebaseInit from './FirebaseInit';
import Home from './Home';
import Onboarding from './Onboarding';
import Lists from './Lists';
import { Routes, Route, useNavigate} from "react-router-dom"
import { useEffect } from 'react';

function MainPage(){
  const navigate = useNavigate();

  useEffect(() => {
    FirebaseInit.auth.onAuthStateChanged(function(user){
      if(user) {
        FirebaseInit.RedirectLogin(user, navigate);}
    });
  }, [navigate]);

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