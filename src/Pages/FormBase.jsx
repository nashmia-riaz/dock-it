import { Component} from 'react';

class FormBase extends Component{
    constructor(){
        super();
        this.state = {
            loginData:{
                email: '',
                password: '',
                password2: ''
            }, 
            error:{
                isVisible: false,
                message: ''
            }
        };

        this.error= {visible: false, message:'Error'};

        this.submitForm = this.submitForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){    }

    componentWillUnmount(){}
    
    submitForm(){    }
    
    handleSubmit(e){
        e.preventDefault();
        this.submitForm();
    }

    handleChange(e){
        const {name, value} = e.target; 
        this.setState((prevState) => ({
            loginData: {
              ...prevState.loginData,  // Preserve other values in loginData
              [name]: value,  // Dynamically update specific input field
            },
        }));
    }

    render(){
        return (
        <form onSubmit={this.handleSubmit} className='OnboardingForm'>
            <div>
                <label>EMAIL</label>
                <input type="email" name='email' value={this.state.loginData.email} onChange={this.handleChange}/>
            </div>
            <div>
                <label>PASSWORD</label>
                <input type="password" name='password' value={this.state.loginData.password} onChange={this.handleChange} />
            </div>
            <div>
                <label>RETYPE PASSWORD</label>
                <input type="password" name='password2' value={this.state.loginData.password2} onChange={this.handleChange} />
            </div>
            <div>
                <p className='error' style={{ visibility: this.state.error.visible ? 'visible' : 'hidden'}}>{this.state.error.message}</p>
            </div>
            <div><button type="submit" className='OnboardingSubmitButton'>{this.buttonName}</button></div>
        </form>
        )
    }
}

export default FormBase;