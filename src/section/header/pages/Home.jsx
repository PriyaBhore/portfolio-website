// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
// import priyaImage from '../headerimages/priya.png';
// import '../css/home.css';

// function Home() {
//     return (
//         <>
//         <div className='home-container'>
//             <div className="body-container">

//                 <div className="home-content">
//                     <h1>Hii, I am Priya Bhore.</h1>
//                     <br />
//                     <h1>FULL STACK WEBSITE DEVELOPER.</h1>
//                     <br />
//                     <h6>
//                         I am a passionate Full Stack Website Developer proficient in React.js, Node.js, and MySQL.
//                         <br />
//                         Grow your business with a modern, professionally developed website at a reasonable rate.
//                     </h6>
//                     <br />

//                     <div>
//                         <a href="https://www.instagram.com/priya__23.04/" target="_blank" rel="noopener noreferrer">
//                             <FontAwesomeIcon icon={faInstagram} />
//                         </a>
//                         <a href="https://www.linkedin.com/in/priya-baban-bhore-22a0aa293/" target="_blank" rel="noopener noreferrer">
//                             <FontAwesomeIcon icon={faLinkedin} />
//                         </a>
//                         <a href="https://github.com/PriyaBhore" target="_blank" rel="noopener noreferrer">
//                             <FontAwesomeIcon icon={faGithub} />
//                         </a>
//                         <a href="https://www.naukri.com/mnjuser/profile" target="_blank" rel="noopener noreferrer">
//                             <FontAwesomeIcon icon={faBriefcase} />
//                         </a>
//                         <br />
//                     </div>
//                 </div>

//                 <div>
//                     <img src={priyaImage} alt="Priya" />
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// }
// export default Home;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Typewriter } from "react-simple-typewriter";
import priyaImage from "../headerimages/priya.png";
import "../css/home.css";

function Home() {
  return (
    <>
      <div className="home-body">
        <div className="container-fluid home-container py-5">
          <div className="row align-items-center">
            {/* Text Content Section */}
            <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
              <h1 className="fw-bold">Hi, I am Priya Bhore.</h1>
              <h2 className="fw-bold">
                <Typewriter
                  words={[
                    "FULL STACK WEBSITE DEVELOPER",
                    "FRONT-END WEBSITE DEVELOPER",
                    "UI/UX DEVELOPER",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </h2>
              <p className="mt-4">
                I am a passionate Full Stack Website Developer proficient in
                React.js, Node.js, and MySQL.
                <br />
                Grow your business with a modern, professionally developed
                website at a reasonable rate.
              </p>
              <div className="mt-4 d-flex justify-content-center flex-wrap">
                <a
                  href="https://www.instagram.com/priya__23.04/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark me-2 mb-2"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                  href="https://www.linkedin.com/in/priya-baban-bhore-22a0aa293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark me-2 mb-2"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                  href="https://github.com/PriyaBhore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark me-2 mb-2"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.naukri.com/mnjuser/profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-dark mb-2"
                >
                  <FontAwesomeIcon icon={faBriefcase} />
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center text-center mt-4 mt-md-0">
              <img src={priyaImage} alt="Priya" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
