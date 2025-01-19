import { Link, Outlet } from "react-router-dom";
import '../style/Layout.css'; 

function Layout() {
    return (
        <div className="layout-container">
            <nav className="navbar navbar-expand-lg bg-danger bg-opacity-75 border-bottom border-body">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#" style={{ color: "#f5e7e9", fontFamily: "sans-serif" }}>Bookify</a>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#f5e7e9" }}>
                                    <i className="bi bi-house-fill me-2"></i> Home
                                </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" to="/book" style={{ color: "#f5e7e9" }}>
                                    <i className="bi bi-book me-2"></i> Books
                                </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" to="/addbook" style={{ color: "#f5e7e9" }}>
                                    <i className="bi bi-plus-circle me-2"></i> AddBook
                                </Link>
                            </li>
                            <li className="nav-item me-4">
                                <Link className="nav-link" to="/about" style={{ color: "#f5e7e9" }}>
                                    <i className="bi bi-info-circle me-2"></i> About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="main-content">
                <Outlet />  
            </div>

            <div className="about-us-footer text-center mt-5 py-3">
                &copy; 2024 Bookify. All rights reserved.
            </div>
        </div>
    );
}

export default Layout;
