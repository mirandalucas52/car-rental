import HeroFerrari from "../../components/Hero-Ferrari";
import BookCar from "../../components/Book-Car";
import ClientTestimonials from "../../components/Client-Testimonials";

function Testimonials() {
    return (
        <div className="Testimonials">
            <HeroFerrari title="Testimonials" subtitle="Testimonials" />
            <ClientTestimonials />
            <BookCar />
        </div>
    );
}

export default Testimonials;
