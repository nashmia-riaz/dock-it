import '../App.css'
import  {useState} from 'react'
import Login from './Login';
import Register from './Register';

function Onboarding(){
  const [pageState, changeState] = useState('REGISTER'); 
  
  var currentPage = <Register/>;
  if(pageState == 'REGISTER')
    currentPage = <Register/>;
  else if (pageState == 'LOGIN')
    currentPage = <Login/>;

  return (  
    <div className='OnboardingContainer'>
      <a href="#" onClick={()=>changeState('REGISTER')} className={`onboard-button ${pageState == 'REGISTER' ? 'active' : 'inactive'}`} ><h2>REGISTER</h2></a>
      <a href="#" onClick={()=>changeState('LOGIN')} className={`onboard-button ${pageState == 'LOGIN' ? 'active' : 'inactive'}`}><h2>LOGIN</h2></a> 
      {currentPage}   
    </div>
  )
}

export default Onboarding