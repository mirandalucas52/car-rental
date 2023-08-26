import "./Header.css";
import logo from "../../assets/logo-car-rental.png";
import { Link } from "react-router-dom";

function Header() {
    return (
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
        </header>
    );
}

export default Header;
