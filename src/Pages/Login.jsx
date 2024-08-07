import '../Styles/Login.css'
import FirebaseInit from './FirebaseInit'
import {   signInWithEmailAndPassword } from 'firebase/auth'
import  {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const loginUserWithFirebase = (email, password, navigate, setError)=>{
    signInWithEmailAndPassword(FirebaseInit.auth, email, password). 
    then((userCredential) =>{
        const user = userCredential.user;
        console.log('Login successful '+user.email);
        navigate('/lists', {state: user.email});
    }).catch((error)=>{
        const errorMessage = error.message;
        console.log('Login failed ' + errorMessage);
        setError({visible: true, message: errorMessage});
    });
};

function Login(){
    const navigate = useNavigate();
    const [error, setError] = useState({visible: false, message:'Error'});

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
        loginUserWithFirebase(data.email, data.password, navigate, setError);
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
            <label>RETYPE PASSWORD</label>
            <input type="password" name='password2' value={loginData.password2} onChange={handleChange} />
        </div>
        <div>
            <p className='error' style={{ visibility: error.visible ? 'visible' : 'hidden'}}>{error.message}</p>
        </div>
        <div><button type="submit" className='OnboardingSubmitButton'>LOGIN</button></div>
    </form>
    )
}

export default Login