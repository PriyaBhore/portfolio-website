import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span> &nbsp;View Menu
                    </button>

                    <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
                        <ul className="navbar-nav w-100 d-flex justify-content-around">
                            <li className="nav-item">
                                <Link to="/Home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Aboutme" className="nav-link">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Skills" className="nav-link">Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Projects" className="nav-link">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Experience" className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <div className="hero-section">
             <Outlet /> {/* This will display the Home content or the selected route's content */}
            </div>

            <footer className="text-center py-3 bg-dark text-light">
                &copy; 2025 Priya Bhore. All rights reserved.
            </footer>

        </>
    );
}

export default Layout;

