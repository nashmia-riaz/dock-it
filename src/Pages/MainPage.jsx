import '../App.css'
import Home from './Home';
import Onboarding from './Onboarding';
import Lists from './Lists';
import { Routes, Route } from "react-router-dom"

function MainPage(){
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="onboarding" element={ <Onboarding/> } />
        <Route path="lists" element={<Lists/>}/>
      </Routes>
    </div>
  )
}

export default MainPage