import "./Header.css"
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <h1>Shane Johnson</h1>
            <nav>
                <ul className="nav-links">
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">About Me</Link>
                    </li>
                    <li className={location.pathname === "/portfolio" ? "active" : ""}>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className={location.pathname === "/contact" ? "active" : ""}>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className={location.pathname === "/resume" ? "active" : ""}>
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;