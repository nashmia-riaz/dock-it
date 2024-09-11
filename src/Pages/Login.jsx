import '../Styles/Login.css'
import FirebaseInit from './FirebaseInit'
import {   signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import FormBase from './FormBase';

function withNavigate(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

class Login extends FormBase{
    loginUserWithFirebase(email, password, password2){
        if(password !== password2){
            this.setState(() => ({
                error: {
                    visible: true,
                    message: 'Passwords do not match'
                },
            }));
            return;
        }
        signInWithEmailAndPassword(FirebaseInit.auth, email, password). 
        then((userCredential) =>{
            const user = userCredential.user;
            console.log('Login successful '+user.email);
            this.props.navigate('/lists', {state: user.email});
        }).catch((error)=>{
            const errorMessage = error.message;
            console.log(error);
            this.setState(() => ({
                error: {
                    visible: true,
                    message: errorMessage
                },
            }));
        });
    }

    constructor(){
        super();
        this.registerUserWithFirebase = this.registerUserWithFirebase.bind(this);
    }

    submitForm(){
        this.loginUserWithFirebase(this.state.loginData.email, this.state.loginData.password, this.state.loginData.password2);
    }    
}

export default withNavigate(Login);