import '../App.css'
import FirebaseInit from './FirebaseInit';
import Home from './Home';
import Onboarding from './Onboarding';
import Lists from './Lists';
import { Routes, Route, useNavigate} from "react-router-dom"
import { useEffect } from 'react';
import Helper from '../../Helper';

function MainPage(){
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Starting app');
    FirebaseInit.auth.onAuthStateChanged(function(user){
      if(user) {
        FirebaseInit.RedirectLogin(user, navigate);}
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path={Helper.references.baseURL} element={ <Home/> } />
        <Route path={Helper.references.baseURL + "/onboarding"} element={ <Onboarding/> } />
        <Route path={Helper.references.baseURL +"/lists"} element={<Lists/>}/>
      </Routes>
    </div>
  )
}

export default MainPage