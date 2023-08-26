import HeroFerrari from "../../components/Hero-Ferrari";
import BookCar from "../../components/Book-Car";
import ContactComponent from "../../components/Contact-Component";

function Contact() {
    return (
        <div className="Contact">
            <HeroFerrari title="Contact" subtitle="Contact" />
            <ContactComponent />
            <BookCar />
        </div>
    );
}

export default Contact;
