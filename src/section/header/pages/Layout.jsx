import { Outlet,Link } from "react-router";

function Layout(){
    return(
        <>
            <nav className="navbar">
                <ul className="navbar-list">
                    <li><Link to='/Home' className="navbar-item">Home</Link></li>
                    <li><Link to='/Aboutme' className="navbar-item">About Me</Link></li>
                    <li><Link to='/Skills' className="navbar-item">Skills</Link></li>
                    <li><Link to='/Projects' className="navbar-item">Project</Link></li>
                    <li><Link to='/Experience' className="navbar-item">Services</Link></li>
                    <li><Link to='/Contact' className="navbar-item">Contact</Link></li>


                </ul>
            </nav>
            <Outlet/>
        </>
    )
}
export default Layout;