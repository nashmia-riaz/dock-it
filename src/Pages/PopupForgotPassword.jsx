import Popup from "./Popup";

class PopupForgotPassword extends Popup{
    constructor(props){
        super(props);

        this.email = '';
    }

    OnChangeEmail(email){ this.email = email;}

    render(){ 
        return(
            <div className='PopupContainer'>
                <div className='PopupModal' ref={this.popupRef}>
                    <p>{this.props.data.Message}</p>
                    <input className="importCodeInput" onChange={(event)=>this.OnChangeEmail(event.target.value)}></input>
                    <button className="PopupYesButton" onClick={()=>this.props.data.OnYes(this.email)}>Send Email</button>
                    <p className='error'>{this.props.data.errorMessage}</p>
                    <p className='success'>{this.props.data.successMessage}</p>
                </div>
            </div>
        );
    }   
}

export default PopupForgotPassword;