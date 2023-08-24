import "./Footer.css";

function Footer() {
    return (
        <footer>
            <ul className="footerContent1">
                <li>
                    <span>CAR</span> Rental
                </li>
                <li>
                    <p>
                        We offers a big range of vehicles for all your driving
                        needs. We have the perfect car to meet your needs.
                    </p>
                </li>
                <li>
                    <a href=".">
                        <i class="fa-solid fa-phone"></i> &nbsp; (123)-456-789
                    </a>
                </li>
                <li>
                    <a href=".">
                        <i class="fa-solid fa-envelope"></i> &nbsp;
                        carrental@gmail.com
                    </a>
                </li>
                <li>
                    <a href=".">Designed by Lucas Miranda</a>
                </li>
            </ul>
            <ul className="footerContent2">
                <li>COMPANY</li>
                <li>
                    <a href=".">New York</a>
                </li>
                <li>
                    <a href=".">Careers</a>
                </li>
                <li>
                    <a href=".">Mobile</a>
                </li>
                <li>
                    <a href=".">Blog</a>
                </li>
                <li>
                    <a href=".">How we work</a>
                </li>
            </ul>
            <ul className="footerContent3">
                <li>WORKING HOURS</li>
                <li>Mon - Fri: 9:00AM - 9:00PM</li>
                <li>Sat: 9:00AM - 19:00PM</li>
                <li>Sun: Closed</li>
            </ul>
            <ul className="footerContent4">
                <li>SUBSCRIPTION</li>
                <li>
                    <p>
                        Subscribe your Email address for latest news & updates.
                    </p>
                </li>
                <li>
                    <input type="email" placeholder="Enter Email Address" />
                </li>
                <li>
                    <button>Submit</button>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
