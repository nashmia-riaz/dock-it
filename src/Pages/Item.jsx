
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

class Item extends Component{
    constructor(props){
        super(props)
        this.item = null;
        this.textAreaRef = React.createRef();

        if(props){
            this.item = props.data.item;
            this.SaveChanges = props.data.SaveChanges;
            this.OnPushItemTask = props.data.OnPushItemTask;
            this.OnChangeItemTask = props.data.OnChangeItemTask;
            this.OnToggleCheck = props.data.OnToggleCheck;
        }
    }
    

    componentDidUpdate(){
        const textArea = this.textAreaRef.current;
        if(textArea != null) {
            textArea.style.height = '1.4em'; // Reset height to auto to shrink if needed
            textArea.style.height = `${textArea.scrollHeight}px`; // Set height to scrollHeight to expand as needed
        }
    }

    adjustTextareaHeight = ()=>{
        const textArea = this.textAreaRef.current;
        if(textArea != null) {
            console.log('adjusting height');
            textArea.style.height = 'auto'; // Reset height to auto to shrink if needed
            textArea.style.height = `${textArea.scrollHeight}px`; // Set height to scrollHeight to expand as needed
        }
    }

    render(){return(
    this.item && <div key={this.item.id}>
        <FontAwesomeIcon onClick={()=>this.OnToggleCheck(this.item)} className={((!this.item.checkmark) ? 'unchecked' : 'checked') + ' itemCheckIcon'} icon={(!this.item.checkmark) ? faCircle : faCircleCheck}/> 
        <textarea ref={this.textAreaRef} className={((this.item.checkmark) ? 'itemNameCrossed' : '') +' itemName'} value={this.item.task} onKeyDown={this.SaveChanges} onBlur={()=>this.OnPushItemTask(this.item)} onChange={(event)=>{this.OnChangeItemTask(this.item, event.target.value); }}/> 
        <FontAwesomeIcon className='editItemButton' icon={faTrash}></FontAwesomeIcon>
    </div>);
    }
}

export default Item;