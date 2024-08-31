import {forwardRef} from 'react';

const ListOptions = forwardRef((props, ref)=>{
    return(
        <div ref={ref} className="listOptions" style={{left: `${props.data.position.left}px`, top:`${props.data.position.top}px`}}>
            <div className="listOption">Share</div>
            <div className='listOption'>Delete</div>
            <div className='listOption'>Remove</div>
        </div>
    )
    
});

ListOptions.displayName = 'ListOptions';

export default ListOptions;