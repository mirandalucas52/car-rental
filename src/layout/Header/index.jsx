import "./Header.css";
import logo from "../../assets/logo-car-rental.png";

function Header() {
    return (
        <header>
            <a href="/">
                <img src={logo} alt="car rental" />
            </a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/vehiclemodels">Vehicle Models</a>
                </li>
                <li>
                    <a href="/testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="/ourteam">Our Team</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
            <div className="register">
                <a href="/">Sign In</a>
                <a href="/" className="registerBtn">
                    Register
                </a>
            </div>
        </header>
    );
}

export default Header;
