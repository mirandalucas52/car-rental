import "./Header.css";
import logo from "../../assets/logo-car-rental.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuActive(!mobileMenuActive);
    };

    return (
        <>
            <div className={`mobileMenu ${mobileMenuActive ? "active" : ""}`}>
                <div className="navBarClose" onClick={toggleMobileMenu}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <ul>
                    <li>
                        <Link to="/" onClick={toggleMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/vehiclemodels" onClick={toggleMobileMenu}>
                            Models
                        </Link>
                    </li>
                    <li>
                        <Link to="/testimonials" onClick={toggleMobileMenu}>
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link to="/ourteam" onClick={toggleMobileMenu}>
                            Our Team
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={toggleMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <header>
                <Link to="/">
                    <img src={logo} alt="car rental" />
                </Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/vehiclemodels">Vehicle Models</Link>
                    </li>
                    <li>
                        <Link to="/testimonials">Testimonials</Link>
                    </li>
                    <li>
                        <Link to="/ourteam">Our Team</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="register">
                    <Link to="/">Sign In</Link>
                    <Link to="/" className="registerBtn">
                        Register
                    </Link>
                </div>
                <i
                    className="fa-solid fa-bars openMenu"
                    onClick={toggleMobileMenu}
                ></i>
            </header>
        </>
    );
}

export default Header;
