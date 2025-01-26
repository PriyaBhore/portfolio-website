import logoImage from './headerimages/logoimage.jpg';
import './css/header.css';
import './css/routing.css'


function Intro(){
    return (
      <>
        <div className="header-container d-flex flex-column flex-md-row align-items-center justify-content-between p-3">
          <h4 className="text-center text-md-start mb-2 mb-md-0">
            Priya Bhore - Portfolio
          </h4>
          <div className="header-logo d-flex  justify-content-between align-items-center">
            <img src={logoImage} alt="Logo" className="me-3 logo-img" />
            <h3 className="m-0 text-center text-md-start">EroIT Solutions</h3>
          </div>
        </div>
      </>
    );
}
export default Intro;