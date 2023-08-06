import "./Plan.css";
import selectCar from "../../assets/select-car.png";
import contactOperator from "../../assets/contact-operator.png";
import letsDrive from "../../assets/lets-drive.png";

function Plan() {
    return (
        <section className="planSection">
            <h4>Plan your trip now</h4>
            <h5>Quick & easy car rental</h5>
            <div className="planSectionDiv">
                <div>
                    <img src={selectCar} alt="Select car" />
                    <h6>Select Car</h6>
                    <p>
                        We offers a big range of vehicles for all your driving
                        needs. We have the perfect car to meet your needs
                    </p>
                </div>
                <div>
                    <img src={contactOperator} alt="Contact Operator" />
                    <h6>Contact Operator</h6>
                    <p>
                        Our knowledgeable and friendly operators are always
                        ready to help with any questions or concerns
                    </p>
                </div>
                <div>
                    <img src={letsDrive} alt="Let's Drive" />
                    <h6>Let's Drive</h6>
                    <p>
                        Whether you're hitting the open road, we've got you
                        covered with our wide range of cars
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Plan;
