import { Outlet,Link } from "react-router";

function Layout(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/Aboutme'>About Me</Link></li>
                    <li><Link to='/Skills'>Skills</Link></li>
                    <li><Link to='/Projects'>Project</Link></li>
                    <li><Link to='/Experience'>Experience</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>


                </ul>
            </nav>
            <Outlet/>
        </>
    )
}
export default Layout;