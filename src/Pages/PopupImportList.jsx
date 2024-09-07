import Popup from "./Popup";
class PopupImportList extends Popup{
    constructor(props){
        super(props);
    }

    render(){ 
        return(
        <div className='PopupContainer'>
            <div className='PopupModal' ref={this.popupRef}>
                <p>{this.props.data.Message}</p>
                <button className="PopupNoButton" onClick={this.props.data.OnNo}>Close</button>
            </div>
        </div>);
    }   
}

export default PopupImportList;