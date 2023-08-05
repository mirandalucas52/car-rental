import "./Hero.css";
import HeroCar from "../../assets/main-car.png";

function Hero() {
    return (
        <div className="hero">
            <section>
                <h1>Plan your trip now</h1>
                <h2>
                    Save <span>big</span> with our car rental
                </h2>
                <p>
                    Rent the car of your dreams. Unbeatable prices, unlimited
                    miles, flexible pick-up options and much more.
                </p>
                <div className="buttonsHero">
                    <a href="/" className="bookRide">
                        Book Ride &nbsp;<i class="fa-solid fa-circle-check"></i>
                    </a>
                    <a href="/" className="learnMore">
                        Learn More &nbsp;<i class="fa-solid fa-angle-right"></i>
                    </a>
                </div>
            </section>
            <img className="heroCar" src={HeroCar} alt="Car" />
        </div>
    );
}

export default Hero;
