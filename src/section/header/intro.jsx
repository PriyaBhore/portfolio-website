import logoImage from './headerimages/logoimage.jpg';
import './css/header.css';
import './css/routing.css'


function Intro(){
    return(
        <>
        <div className="header-container">
            <h4>Priya Bhore- Portfolio</h4>
            <div className="header-logo"> 
            <img src={logoImage} alt="Logo" />
            <h3>EroIT Solutions</h3>
            {/* <p>A Complete solution to your task</p> */}
             </div>
        </div>

        </>
    );
}
export default Intro;