import "./About-Company.css";
import AboutImage from "../../assets/about-main.ed0137841dc67d61ec95.jpg";
import CarTypesIcon from "../../assets/car-icon.png";
import RentalOutletsIcon from "../../assets/rental-outlets.png";
import RepairShopIcon from "../../assets/repair-shop.png";

function AboutCompany() {
    return (
        <section className="aboutCompany">
            <div className="aboutMainFlex">
                <img className="aboutMainImg" src={AboutImage} alt="" />
                <div className="aboutMainText">
                    <h2>About Company</h2>
                    <h3>You start the engine and your adventure begins</h3>
                    <p className="aboutMainP">
                        Certain but she but shyness why cottage. Guy the put
                        instrument sir entreaties affronting. Pretended
                        exquisite see cordially the you. Weeks quiet do vexed or
                        whose. Motionless if no to affronting imprudence no
                        precaution. My indulged as disposal strongly attended.
                    </p>
                    <div className="aboutIcons">
                        <div>
                            <img src={CarTypesIcon} alt="" />
                            <span>
                                <h4>20</h4>
                                <p>Car Types</p>
                            </span>
                        </div>
                        <div>
                            <img src={RentalOutletsIcon} alt="" />
                            <span>
                                <h4>85</h4>
                                <p>Rental Outlets</p>
                            </span>
                        </div>
                        <div>
                            <img src={RepairShopIcon} alt="" />
                            <span>
                                <h4>75</h4>
                                <p>Repair Shop</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutCompany;
