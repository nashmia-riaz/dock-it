
import { useNavigate } from 'react-router-dom';
import FormBase from './FormBase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import FirebaseInit from './FirebaseInit'
import Helper from '../../Helper';

function withNavigate(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

class Register extends FormBase{
    
    registerUserWithFirebase(email, password, password2){
        if(password !== password2){
            this.setState(() => ({
                error: {
                    visible: true,
                    message: 'Passwords do not match'
                },
            }));
            return;
        }
        createUserWithEmailAndPassword(FirebaseInit.auth, email, password). 
        then((userCredential) =>{
            const user = userCredential.user;
            this.props.navigate(Helper.references.baseURL + '/lists', {state: user.email});
        }).catch((error)=>{
            const errorMessage = error.message;
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
        this.buttonName = 'REGISTER';
        this.registerUserWithFirebase = this.registerUserWithFirebase.bind(this);
    }

    submitForm(){
        this.registerUserWithFirebase(this.state.loginData.email, this.state.loginData.password, this.state.loginData.password2);
    }    
}

export default withNavigate(Register);