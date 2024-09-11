import '../App.css'
import '../Styles/Login.css'
import  {useState} from 'react'
import Login from './Login';
import Register from './Register';
import MartyWave from '../assets/Marty-wave.png';
import Rocket from '../assets/Rocket.png'


function Onboarding(){
  const [pageState, changeState] = useState('REGISTER'); 
  
  var currentPage = <Register/>;
  if(pageState == 'REGISTER')
    currentPage = <Register/>;
  else if (pageState == 'LOGIN')
    currentPage = <Login/>;

  return (  
    <div className='OnboardingContainer'>
      <img className='MartyWave'src={MartyWave} alt="" />
      <img className='Rocket'src={Rocket} alt="" />
      <button onClick={()=>changeState('REGISTER')} className={`onboard-button ${pageState == 'REGISTER' ? 'active' : 'inactive'}`} ><h2>REGISTER</h2></button>
      <button onClick={()=>changeState('LOGIN')} className={`onboard-button ${pageState == 'LOGIN' ? 'active' : 'inactive'}`}><h2>LOGIN</h2></button> 
      {currentPage}   
    </div>
  )
}

export default Onboarding