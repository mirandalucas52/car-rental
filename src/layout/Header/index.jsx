import "./Header.css";
import logo from "../../assets/logo-car-rental.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link href="/">
                <img src={logo} alt="car rental" />
            </Link>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/vehiclemodels">Vehicle Models</Link>
                </li>
                <li>
                    <Link href="/testimonials">Testimonials</Link>
                </li>
                <li>
                    <Link href="/ourteam">Our Team</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
            <div className="register">
                <Link href="/">Sign In</Link>
                <Link href="/" className="registerBtn">
                    Register
                </Link>
            </div>
        </header>
    );
}

export default Header;
