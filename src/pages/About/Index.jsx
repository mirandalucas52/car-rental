import HeroFerrari from "../../components/Hero-Ferrari";
import Plan from "../../components/Plan";
import BookCar from "../../components/Book-Car";
import AboutCompany from "../../components/About-Company";

function About() {
    return (
        <section className="aboutPage">
            <HeroFerrari title="About" subtitle="About" />
            <AboutCompany />
            <Plan />
            <BookCar />
        </section>
    );
}

export default About;
