import '../Styles/Login.css'
import {  initializeApp } from 'firebase/app'
import {  getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import  {useState} from 'react'

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
const loginUserWithFirebase = (email, password)=>{
    signInWithEmailAndPassword(auth, email, password). 
    then((userCredential) =>{
        const user = userCredential.user;
        console.log('Login successful');
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Login failed '+errorMessage);
    });
};

function Login(){
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        password2: ''
    });

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setLoginData( {
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        submitForm(loginData);
    };

    const submitForm = (data)=>{
        loginUserWithFirebase(data.email, data.password);
    }
    

    return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>EMAIL</label>
            <input type="email" name='email' value={loginData.email} onChange={handleChange}/>
        </div>
        <div>
            <label>PASSWORD</label>
            <input type="password" name='password' value={loginData.password} onChange={handleChange} />
        </div>
        <div>
            <label>PASSWORD</label>
            <input type="password" name='password2' value={loginData.password2} onChange={handleChange} />
        </div>
        <div><button type="submit">LOGIN</button></div>
    </form>
    )
}

export default Login