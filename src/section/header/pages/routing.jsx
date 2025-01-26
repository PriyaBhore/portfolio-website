import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Home.jsx';
import Aboutme from './Aboutme.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Contact from './Contact.jsx';


function Routing(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>} >
                    <Route index element={<Home />} /> {/* Default route */}
                    <Route path='/Home' element={<Home/>} />
                    <Route path='/Aboutme' element={<Aboutme/>} />
                    <Route path='/Skills' element={<Skills/>} />
                    <Route path='/Projects' element={<Projects/>} />
                    <Route path='/Experience' element={<Experience/>} />
                    <Route path='/Contact' element={<Contact/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Routing;





