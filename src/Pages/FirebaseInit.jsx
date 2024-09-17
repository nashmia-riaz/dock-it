
import {  initializeApp } from 'firebase/app'
import {  getAuth, browserLocalPersistence, signOut } from 'firebase/auth'
import Helper from '../../Helper';

const firebaseConfig = {
    apiKey: "AIzaSyDVGWGzZzzK6CuIO_c53kKI5khsjc9E0IM",
    authDomain: "dock-it-1553b.firebaseapp.com",
    databaseURL: "https://dock-it-1553b-default-rtdb.firebaseio.com",
    projectId: "dock-it-1553b",
    storageBucket: "dock-it-1553b.appspot.com",
    messagingSenderId: "736775214430",
  
    appId: "1:736775214430:web:98b131a44ce34f2cee6bcf"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.setPersistence(browserLocalPersistence);

  
function SignOut(navigate){
  signOut(auth).
  then(()=>{
    navigate(Helper.references.baseURL);
  }).
  catch((error)=>{
    console.log(error);
  });
}

function RedirectLogin(currentUser, navigate){
    if (currentUser) 
      navigate(Helper.references.baseURL + '/lists');
    else
      navigate(Helper.references.baseURL);
}

export default {app, auth, SignOut, RedirectLogin};