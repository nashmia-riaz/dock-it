import '../Styles/Home.css'
import Logo from '../assets/Logo.png'
import Planet from '../assets/Planet.png'
import Star from '../assets/Star.png'
import Marty from '../assets/Marty-Astronaut.png'
import Rocket from '../assets/Rocket.png'
import { Link } from "react-router-dom"

function Home(){
    return (
    <div id='HomeGradient'>
        <div className='HomeBackground'>
            <div className='HomeContainer'>
                <div id='HomeTitle'>
                    <h3>WELCOME TO</h3>
                    <img src={Logo} alt="" />
                </div>
                <div id='HomeInformation'>
                    <div id='HomeImages'>
                        <img src={Marty} id='HomeMarty' alt="" />
                        <img src={Planet} id='HomePlanet' alt="" />
                        <img src={Star} id='HomeStar1'alt="" />
                        <img src={Star} id='HomeStar2'alt="" />
                        <img src={Star} id='HomeStar3'alt="" />
                        <img src={Star} id='HomeStar4'alt="" />
                        <img src={Rocket} id='HomeRocket' alt="" />
                    </div>
                    <div id='HomeSubtitle'>
                        A minimal to-do list app that helps you focus on what needs to be done.
                    </div>
                </div>
                <Link to="onboarding" id='GetStartedButton'>GET STARTED</Link>
            </div>
        </div>
    </div>
    )
}

export default Home