import '../App.css'
import Home from './Home';
import Onboarding from './Onboarding';
import { Routes, Route } from "react-router-dom"

function MainPage(){
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="onboarding" element={ <Onboarding/> } />
      </Routes>
    </div>
  )
}

export default MainPage