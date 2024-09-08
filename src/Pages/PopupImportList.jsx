import Popup from "./Popup";
class PopupImportList extends Popup{
    constructor(props){
        super(props);
    }

    OnChangeCode(code){
        this.code = code;
    }

    render(){ 
        return(
        <div className='PopupContainer'>
            <div className='PopupModal' ref={this.popupRef}>
                <p>{this.props.data.Message}</p>
                <input className="importCodeInput" onChange={(event)=>this.OnChangeCode(event.target.value)}></input>
                <button className="PopupYesButton" onClick={()=>this.props.data.OnYes(this.code)}>Import</button>
                <button className="PopupNoButton" onClick={this.props.data.OnNo}>Close</button>
            </div>
        </div>);
    }   
}

export default PopupImportList;