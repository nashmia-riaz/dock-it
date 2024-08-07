import { useLocation } from "react-router-dom";

function Lists(){
    const location = useLocation();
    const{ userEmail } = location.state || {};

    console.log(userEmail);

    return (
    <div id='HomeGradient'>
        <div className='HomeBackground'>
          
        </div>
    </div>
    )
}

export default Lists