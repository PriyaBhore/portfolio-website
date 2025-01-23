import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Contact from './section/hero/Contact.jsx';
import Intro from './section/header/intro.jsx';
import Routing from './section/header/pages/routing.jsx';
import App from './App.jsx';
import Footer from './section/footer/media.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Intro />
    <Routing />
    <Contact />
    <App />
    <Footer />
  </StrictMode>,
);
