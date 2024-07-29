import ReactDOM from 'react-dom/client'
import './index.css'
import MainPage from './Pages/MainPage'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainPage/>
  </BrowserRouter>,
)
