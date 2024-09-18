import '../Styles/Login.css'
import FirebaseInit from './FirebaseInit'
import {   signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import FormBase from './FormBase';
import Helper from '../../Helper';
import PopupForgotPassword from './PopupForgotPassword';

function withNavigate(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate();
        return <Component {...props} navigate={navigate} />;
    };
}

class Login extends FormBase{
    loginUserWithFirebase(email, password){        
        signInWithEmailAndPassword(FirebaseInit.auth, email, password). 
        then((userCredential) =>{
            const user = userCredential.user;
            console.log('Login successful '+user.email);
            this.props.navigate(Helper.references.baseURL +'/lists', {state: user.email});
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

    submitForm(){
        this.loginUserWithFirebase(this.state.loginData.email, this.state.loginData.password);
    }    

    EnablePopup(enable){
        this.setState(prevState =>({
            ...prevState,
            forgotPasswordPopup: {...prevState.forgotPasswordPopup,
                isVisible: enable
            }
        }));
    }

    ShowForgotPasswordPopup(){
        this.EnablePopup(true);
    }

    ResetPassword(email){
        console.log(email);
        sendPasswordResetEmail(FirebaseInit.auth, email)
        .then(()=>{
            this.setState(prevState =>({
                ...prevState,
                forgotPasswordPopup: {...prevState.forgotPasswordPopup,
                    errorMessage: '',
                    successMessage: 'Password reset email was sent successfully.'
                }
            }));
        })
        .catch((error)=>{
            this.setState(prevState =>({
                ...prevState,
                forgotPasswordPopup: {...prevState.forgotPasswordPopup,
                    successMessage: '',
                    errorMessage: error.message
                }
            }));
        })
    }

    constructor(){
        super();
        this.buttonName = 'LOGIN';
        this.loginUserWithFirebase = this.loginUserWithFirebase.bind(this);
        this.EnablePopup = this.EnablePopup.bind(this);
        this.ShowForgotPasswordPopup = this.ShowForgotPasswordPopup.bind(this);
        this.ResetPassword = this.ResetPassword.bind(this);
        this.state = {
            ...this.state,
            forgotPasswordPopup: {isVisible: false, Message: 'Send password reset email?', OnYes: (email)=>this.ResetPassword(email), OnNo: ()=>this.EnablePopup(false), successMessage:'', errorMessage: ''}
        };
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='OnboardingForm'>
                    <div>
                        <label>EMAIL</label>
                        <input type="email" name='email' value={this.state.loginData.email} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>PASSWORD</label>
                        <input type="password" name='password' value={this.state.loginData.password} onChange={this.handleChange} />
                    </div>
                    <div className='loginForgotPasssword'>
                        <p onClick={()=>this.EnablePopup(true)}>Forgot password?</p>
                    </div>
                    <div>
                        <p className='error' style={{ visibility: this.state.error.visible ? 'visible' : 'hidden'}}>{this.state.error.message}</p>
                    </div>
                    <div><button type="submit" className='OnboardingSubmitButton'>{this.buttonName}</button></div>
                </form>
                {(this.state.forgotPasswordPopup.isVisible) ? (<PopupForgotPassword data={this.state.forgotPasswordPopup}/>) : null}
            </div>
        )
    }
}

export default withNavigate(Login);