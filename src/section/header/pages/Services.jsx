// import React from "react";
// import webdevimg from '../headerimages/webapplication.jpg';
// import frontendimg from '../headerimages/frontend.jpg';
// import backendimg from '../headerimages/backendservice.webp'
// function Services() {
//   return (
//     <>
//       <div>
//       <div className="card" style={{width:"18rem"}}>
//             <img className="card-img-top" src={webdevimg} alt="Card image cap" />
//             <div className="card-body">
//              <h5 className="card-title">Web Application Development</h5>
//             <p className="card-text">
//             I provide custom web application development tailored to your business needs, ensuring high performance and scalability. 
//             From dynamic websites to full-stack web applications, I build secure, responsive, and user-friendly solutions. 
//             Using modern technologies like React.js, Node.js, Express.js, and MySQL, I create seamless digital experiences.
//              My services include frontend & backend development, API integration, authentication, and database management. 
//             Whether you need a business portal, e-commerce platform, or a custom dashboard, 
//             I deliver robust and scalable applications. Let's turn your ideas into a powerful web solution!
//             </p>
//             </div>
//     </div>

//     <div className="card" style={{width:"18rem"}}>
//             <img className="card-img-top" src={frontendimg} alt="Card image cap" />
//             <div className="card-body">
//              <h5 className="card-title">Frontend Development</h5>
//             <p className="card-text">
//             I specialize in modern, responsive, and visually appealing frontend development using the latest technologies 
//             like React.js, HTML, CSS, JavaScript, and Bootstrap. I create user-friendly, fast, and interactive web interfaces 
//             that enhance user experience and engagement. My expertise includes custom UI designs, animations, responsive layouts,
//              and performance optimization to ensure seamless functionality across all devices. Whether you need a landing page, 
//              dynamic web application, or an e-commerce frontend, I deliver pixel-perfect designs with a focus on speed, accessibility,
//               and aesthetics. Let’s build a stunning and intuitive frontend for your website! 
//             </p>
//             </div>
//     </div>
//     </div>

//     <div className="card" style={{width:"18rem"}}>
//             <img className="card-img-top" src={backendimg} alt="Card image cap" />
//             <div className="card-body">
//              <h5 className="card-title">Backend Development</h5>
//             <p className="card-text">
//             I provide robust, scalable, and secure backend development to power your web applications. Using technologies like 
//             Node.js, Express.js, and MySQL, I build efficient server-side logic, APIs, and database structures that ensure seamless
//             communication between the frontend and backend. My services include user authentication, data management, API development,
//             real-time processing, and performance optimization. I focus on security, scalability, and efficiency, ensuring that your
//             application runs smoothly even under heavy loads. Whether you need a custom backend solution, RESTful APIs, or database
//              integration, I deliver a strong and reliable backend architecture for your web application
         
//             </p>
//             </div>
//     </div>

//         </>
//   );
// }

// export default Services;




import React from "react";
import webdevimg from "../headerimages/webapplication.jpg"; // Example image import
import frontendImg from "../headerimages/frontend.jpg";
import backendImg from "../headerimages/backendservice.webp";
import uiuxImg from "../headerimages/uiuxdev.webp";
import "../css/services.css"; // Import custom CSS

function Services() {
  const services = [
    {
      title: "Website Development",
      description:
        "I develop dynamic, secure, and scalable web applications using modern technologies like React.js, Node.js, and MySQL.",
      image: webdevimg,
    },
    {
      title: "Frontend Development",
      description:
        "I specialize in creating responsive, interactive, and visually appealing web interfaces using React.js, HTML, CSS, and JavaScript.",
      image: frontendImg,
    },
    {
      title: "Backend Development",
      description:
        "I build secure and efficient server-side applications using Node.js, Express.js, and MySQL for database management.",
      image: backendImg,
    },
    {
      title: "UI/UX Development",
      description:
        "I design user-friendly interfaces and enhance user experiences using modern UI/UX design principles and tools like Figma.",
      image: uiuxImg,
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4" id='servicesid'>Services I Provide</h2>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="card service-card">
              <img
                src={service.image}
                className="card-img-top"
                alt={service.title}
              />
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
