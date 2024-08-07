import '../Styles/Login.css'
import FirebaseInit from './FirebaseInit'
import {  createUserWithEmailAndPassword } from 'firebase/auth'
import  {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const registerUserWithFirebase = (email, password, navigate, setError)=>{
    createUserWithEmailAndPassword(FirebaseInit.auth, email, password). 
    then((userCredential) =>{
        const user = userCredential.user;
        navigate('/lists', {state: user.email});
    }).catch((error)=>{
        const errorMessage = error.message;
        setError({visible: true, message: errorMessage});
    });
};

function Register(){
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [error, setError] = useState({visible: false, message:'Error'});

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
        registerUserWithFirebase(data.email, data.password, navigate, setError);
    }
    

    return (
    <form onSubmit={handleSubmit} className='OnboardingForm'>
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
        <div>
            <p className='error' style={{ visibility: error.visible ? 'visible' : 'hidden'}}>{error.message}</p>
        </div>
        <div><button type="submit" className='OnboardingSubmitButton'>REGISTER</button></div>
    </form>
    )
}

export default Register