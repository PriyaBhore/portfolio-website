// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faHtml5,faCss3Alt,faJsSquare,faReact,faBootstrap,faNodeJs,faGit,faGithubAlt} from "@fortawesome/free-brands-svg-icons";
// import Typescriptimg from '../../hero/images/typescript.png';
// import Reduximg from '../../hero/images/redux.png';
// import Nextjsimg from '../../hero/images/nextjs.png';
// import Jqueryimg from '../../hero/images/jquery2.svg';
// import Tailwindimg from '../../hero/images/tailwind.png';
// import Materialuiimg from '../../hero/images/materialui.png';
// import Expressimg from '../../hero/images/express.png';
// import Mysqlimg from '../../hero/images/mysql.png';
// import Firebaseimg from '../../hero/images/firebase.png';
// import Resumepdf from '../../hero/resume/resume.pdf';



// function Aboutme(){
//     return(
//         <>
//         <h1>About ME :</h1>
//         <p>
//             Hi, I'm <strong>Priya Bhore</strong>, a passionate Full Stack Website Developer with expertise in 
//             <strong> React.js</strong>, <strong>Node.js</strong>, and <strong>MySQL</strong>.I completed my graduation
//              in BSc Information technology from Mumbai University and a Full-Stack Website Development Course from M.S.World 
//              Training Institue. I specialize in creating modern, user-friendly, and professional websites to help businesses thrive online.
//               With a commitment to continuous learning, I strive to deliver high-quality solutions for every project.
//           </p>   
//           <h2>Tech Skills :</h2>  
//           <div>
//             <div>
//                 <h6>CORE LANGUAGES :</h6>
//                 <button><FontAwesomeIcon icon={faHtml5} />Html-5</button>
//                 <button><FontAwesomeIcon icon={faCss3Alt} />CSS-3</button>
//                 <button><FontAwesomeIcon icon={faJsSquare} />Javascript</button>
//                 <button><img src={Typescriptimg} alt='Image' style={{width:10,height:10}} />TypeScript</button>
//              </div>

//              <div>
//              <h6>FRONTEND TECHNOLOGY :</h6>
//              <button><FontAwesomeIcon icon={faReact} />React JS</button>
//              <button><img src={Reduximg} alt='Image' style={{width:10,height:10}} />Redux</button>
//              <button><img src={Nextjsimg} alt='Image' style={{width:10,height:10}} />Next JS</button>
//             </div>

//             <div>
//                 <h6>FRAMEWORKS/LIBRARIES :</h6>
//                 <button><FontAwesomeIcon icon={faBootstrap} />Bootstrap</button>
//                 <button><img src={Jqueryimg} alt='Image' style={{width:10,height:10}} />Jquery</button>
//                 <button><img src={Tailwindimg} alt='Image' style={{width:10,height:10}} />Tailwind</button>
//                 <button><img src={Materialuiimg} alt='Image' style={{width:10,height:10}} />Material UI</button>
//              </div>

//              <div>
//                 <h6>BACKEND TECHNOLOGY :</h6>
//                 <button><FontAwesomeIcon icon={faNodeJs} />NODE-JS</button>
//                 <button><img src={Expressimg} alt='Image' style={{width:10,height:10}} />Express JS</button>
//              </div>

//              <div>
//                 <h6>DATABASE :</h6>
//                 <button><img src={Mysqlimg} alt='Image' style={{width:10,height:10}} />MysQL</button>
//                 <button><img src={Firebaseimg} alt='Image' style={{width:10,height:10}} />Firebase</button>
//             </div>
//             <div>
//                 <h6>VERSION CONTROL :</h6>
//                 <button><FontAwesomeIcon icon={faGit} />Git</button>
//                 <button><FontAwesomeIcon icon={faGithubAlt} />Git Hub</button>
//              </div>

//           </div>

//           <div>
//              <a href={Resumepdf} download='Priya_Bhore_Resume.pdf'> <button>Download Resume </button> </a>
//              <a href='#'> <button>Contact ME</button> </a>
//           </div>

//           <div>
//             <table border={1}>
//                 <thead>
//                 <tr>
//                     <th>Experience/Education :</th>
//                     <th>Timeline :</th>
//                 </tr>
//                 </thead>
                
//                 <tbody>
//                     <tr>
//                         <td>Freelance Website Developer</td>
//                         <td>Present</td>
//                     </tr>
//                     <tr>
//                         <td>Website Developer</td>
//                         <td>January 2025</td>
//                     </tr>
//                     <tr>
//                         <td>Website Developer Internship</td>
//                         <td>July 2024</td>
//                     </tr>
//                     <tr>
//                         <td>Website Developer Trainee</td>
//                         <td>April 2024</td>
//                     </tr>
//                     <tr>
//                         <td>BSC.Information Technology</td>
//                         <td>June 2023</td>
//                     </tr>
//                 </tbody>
//             </table>
//           </div>
//        </>
//     );
// }
// export default Aboutme;


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faBootstrap,
  faNodeJs,
  faGit,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
import Typescriptimg from '../../hero/images/typescript.png';
import Reduximg from '../../hero/images/redux.png';
import Nextjsimg from '../../hero/images/nextjs.png';
import Jqueryimg from '../../hero/images/jquery2.svg';
import Tailwindimg from '../../hero/images/tailwind.png';
import Materialuiimg from '../../hero/images/materialui.png';
import Expressimg from '../../hero/images/express.png';
import Mysqlimg from '../../hero/images/mysql.png';
import Firebaseimg from '../../hero/images/firebase.png';
import Resumepdf from '../../hero/resume/resume.pdf';
import '../css/aboutme.css';

function AboutMe() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Me</h1>
      <p className="text-center lead">
        Hi, I'm <strong>Priya Bhore</strong>, a passionate Full Stack Website Developer with expertise in
        <strong> React.js</strong>, <strong>Node.js</strong>, and <strong>MySQL</strong>. I completed my graduation
        in BSc Information Technology from Mumbai University and a Full-Stack Website Development Course from M.S. World
        Training Institute. I specialize in creating modern, user-friendly, and professional websites to help businesses thrive online.
        With a commitment to continuous learning, I strive to deliver high-quality solutions for every project.
      </p>

      <h2 className="text-center mt-5">Tech Skills</h2>
      <div className="row text-center mt-4">
        {/* Core Languages */}
        <div className="col-md-6 col-lg-4 mb-4">
          <h6>Core Languages</h6>
          <button className="btn btn-outline-primary m-2"><FontAwesomeIcon icon={faHtml5} /> HTML-5</button>
          <button className="btn btn-outline-primary m-2"><FontAwesomeIcon icon={faCss3Alt} /> CSS-3</button>
          <button className="btn btn-outline-primary m-2"><FontAwesomeIcon icon={faJsSquare} /> JavaScript</button>
          <button className="btn btn-outline-primary m-2">
            <img src={Typescriptimg} alt="TypeScript" className="img-fluid" style={{ width: 20, height: 20 }} /> TypeScript
          </button>
        </div>

        {/* Frontend Technology */}
        <div className="col-md-6 col-lg-4 mb-4">
          <h6>Frontend Technology</h6>
          <button className="btn btn-outline-success m-2"><FontAwesomeIcon icon={faReact} /> React JS</button>
          <button className="btn btn-outline-success m-2">
            <img src={Reduximg} alt="Redux" className="img-fluid" style={{ width: 20, height: 20 }} /> Redux
          </button>
          <button className="btn btn-outline-success m-2">
            <img src={Nextjsimg} alt="Next JS" className="img-fluid" style={{ width: 20, height: 20 }} /> Next JS
          </button>
        </div>

        {/* Frameworks/Libraries */}
        <div className="col-md-6 col-lg-4 mb-4">
          <h6>Frameworks/Libraries</h6>
          <button className="btn btn-outline-info m-2"><FontAwesomeIcon icon={faBootstrap} /> Bootstrap</button>
          <button className="btn btn-outline-info m-2">
            <img src={Jqueryimg} alt="Jquery" className="img-fluid" style={{ width: 20, height: 20 }} /> Jquery
          </button>
          <button className="btn btn-outline-info m-2">
            <img src={Tailwindimg} alt="Tailwind" className="img-fluid" style={{ width: 20, height: 20 }} /> Tailwind
          </button>
          <button className="btn btn-outline-info m-2">
            <img src={Materialuiimg} alt="Material UI" className="img-fluid" style={{ width: 20, height: 20 }} /> Material UI
          </button>
        </div>

        {/* Backend Technology */}
        <div className="col-md-6 col-lg-6 mb-4">
          <h6>Backend Technology</h6>
          <button className="btn btn-outline-warning m-2"><FontAwesomeIcon icon={faNodeJs} /> Node.js</button>
          <button className="btn btn-outline-warning m-2">
            <img src={Expressimg} alt="Express JS" className="img-fluid" style={{ width: 20, height: 20 }} /> Express JS
          </button>
        </div>

        {/* Database */}
        <div className="col-md-6 col-lg-6 mb-4">
          <h6>Database</h6>
          <button className="btn btn-outline-danger m-2">
            <img src={Mysqlimg} alt="MySQL" className="img-fluid" style={{ width: 20, height: 20 }} /> MySQL
          </button>
          <button className="btn btn-outline-danger m-2">
            <img src={Firebaseimg} alt="Firebase" className="img-fluid" style={{ width: 20, height: 20 }} /> Firebase
          </button>
        </div>

        {/* Version Control */}
        <div className="col-12">
          <h6>Version Control</h6>
          <button className="btn btn-outline-dark m-2"><FontAwesomeIcon icon={faGit} /> Git</button>
          <button className="btn btn-outline-dark m-2"><FontAwesomeIcon icon={faGithubAlt} /> GitHub</button>
        </div>
      </div>

      <div className="text-center my-5">
        <a href={Resumepdf} download="Priya_Bhore_Resume.pdf">
          <button className="btn btn-primary m-2">Download Resume</button>
        </a>
        <a href="#contact">
          <button className="btn btn-secondary m-2">Contact Me</button>
        </a>
      </div>

      {/* Experience/Education Table */}
      <h2 className="text-center">Experience & Education</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped text-center mt-3">
          <thead className="thead-dark">
            <tr>
              <th>Role/Qualification</th>
              <th>Institute/Organisation</th>
              <th>Timeline</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Freelance Website Developer</td>
              <td>EroIT Solutions</td>
              <td>Present</td>
            </tr>
            <tr>
              <td>Website Developer</td>
              <td>Mandal Softwares</td>
              <td>January 2025</td>
            </tr>
            <tr>
              <td>Website Developer Internship</td>
              <td>Mandal Softwares</td>
              <td>July 2024</td>
            </tr>
            <tr>
              <td>Website Developer Trainee</td>
              <td>M.S.World Institute</td>
              <td>April 2024</td>
            </tr>
            <tr>
              <td>BSc. Information Technology</td>
              <td>Mumbai</td>
              <td>June 2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AboutMe;


