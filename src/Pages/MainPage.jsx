import '../App.css'
import  {useState} from 'react'
import Home from './Home';
import Onboarding from './Onboarding';

function MainPage(){
  var [pageState, changeState] = useState('HOME'); 
  
  const updateState = (newState)=>{
    changeState(newState);
  } 

  var currentPage = <Onboarding/>;
  if(pageState == 'ONBOARDING')
    currentPage = <Onboarding updateState = {updateState}/>;
  else if(pageState == 'HOME')
    currentPage = <Home updateState = {updateState}/>;

  return (
  <div>{currentPage}</div>
  )
}

export default MainPage