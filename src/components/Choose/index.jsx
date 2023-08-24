import "./Choose.css";
import chooseCarsImg from "../../assets/choose-cars.png";
import crossCountryIcon from "../../assets/cross-country-drive-icon.png";
import allInclusiveIcon from "../../assets/all-inclusive-pricing-icon.png";
import NoHiddenChagres from "../../assets/no-hidden-charges-icon.png";

function Choose() {
    return (
        <section className="chooseSection">
            <img
                src={chooseCarsImg}
                alt="choose cars"
                className="chooseCarsImg"
            />
            <div className="chooseFlex">
                <div className="whyChooseUs">
                    <h4>Why Choose Us</h4>
                    <h5>Best valued deals you will ever find</h5>
                    <p>
                        Discover the best deals you'll ever find with our
                        unbeatable offers. We're dedicated to providing you with
                        the best value for your money, so you can enjoy
                        top-quality services and products without breaking the
                        bank. Our deals are designed to give you the ultimate
                        renting experience, so don't miss out on your chance to
                        save big.
                    </p>
                    <a href="/">
                        Find Details &nbsp;{" "}
                        <i class="fa-solid fa-angle-right"></i>
                    </a>
                </div>
                <div className="chooseIconsContainer">
                    <div className="chooseIcons">
                        <img src={crossCountryIcon} alt="Cross country drive" />
                        <div className="iconsText">
                            <h6>Cross Country Drive</h6>
                            <p>
                                Take your driving experience to the next level
                                with our top-notch vehicles for your
                                cross-country adventures.
                            </p>
                        </div>
                    </div>
                    <div className="chooseIcons">
                        <img
                            src={allInclusiveIcon}
                            alt="All inclusive pricing"
                        />
                        <div className="iconsText">
                            <h6>All Inclusive Pricing</h6>
                            <p>
                                Get everything you need in one convenient,
                                transparent price with our all-inclusive pricing
                                policy.
                            </p>
                        </div>
                    </div>
                    <div className="chooseIcons">
                        <img src={NoHiddenChagres} alt="No hidden charges" />
                        <div className="iconsText">
                            <h6>No Hidden Charges</h6>
                            <p>
                                Enjoy peace of mind with our no hidden charges
                                policy. We believe in transparent and honest
                                pricing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Choose;
