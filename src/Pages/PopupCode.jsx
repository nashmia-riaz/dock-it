import {useRef, useState, useEffect} from 'react';

function PopupCode(props){
    const popupRef = useRef(null);
    const [isVisible, setVisibility] = useState(false);

    useEffect(()=>{
        const handleClickOutside = (event) => {
            event.stopPropagation(); 
            
            // Check if the clicked element is outside the div
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                if(isVisible){
                    props.data.OnNo();
                    setVisibility(false);
                }
            }
          };
      
          // Add event listener to the document
          document.addEventListener('click', handleClickOutside);
      
          // Cleanup the event listener on component unmount
          return () => {
            document.removeEventListener('click', handleClickOutside);
          };
    }, [isVisible]);

    useEffect(()=>{
        setVisibility(props.data.isVisible);
    }, [props.data.isVisible]);

    return(
        <div className='PopupContainer'>
            <div className='PopupModal' ref={popupRef}>
                <p>{props.data.Message}</p>
                <span className='ShareKeySpan'>{props.data.ShareKey}</span>
                <button className="PopupNoButton" onClick={props.data.OnNo}>Close</button>
            </div>
        </div>);
}

export default PopupCode;