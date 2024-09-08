import React, { Component } from "react";

class Popup extends Component{
    handleClickOutside(event) {
        // Check if the clicked element is outside the div
        if (this.popupRef.current) {
            if(this.isVisible && !this.popupRef.current.contains(event.target)){
                 this.props.data.OnNo();
                this.isVisible = false;
            }else if (!this.isVisible){
                this.isVisible = true;
            }
        }
    }

    constructor (props){  
        super(props);
        
        this.isVisible = false;
        this.props = props;
        this.popupRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this); 
    }

    componentDidMount(){
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleClickOutside);
        this.isVisible = false;
    }

    render(){     
        return (
            <div className='PopupContainer'>
                <div className='PopupModal' ref={this.popupRef}>
                    <p>{this.props.data.Message}</p>
                    <button className="PopupYesButton" onClick={this.props.data.OnYes}>Yes</button>
                    <button className="PopupNoButton" onClick={this.props.data.OnNo}>No</button>
                </div>
            </div>
        );
    }
}

export default Popup;