import Hero from "../../components/Hero/index";
import HeroBg from "../../assets/hero-bg.png";
import "./Home.css";
import BookBox from "../../components/Book-Box";
import Plan from "../../components/Plan";
import Pick from "../../components/Pick";
import Banner from "../../components/Banner";
import Choose from "../../components/Choose";
import ClientTestimonials from "../../components/Client-Testimonials";
import Faq from "../../components/Faq";
import Download from "../../components/Download";

function Home() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <>
            <button className="scrollToTop" onClick={scrollToTop}>
                <i class="fa-solid fa-arrow-up"></i>
            </button>
            <Hero />
            <img className="heroBg" src={HeroBg} alt="" />
            <BookBox />
            <Plan />
            <Pick />
            <Banner />
            <Choose />
            <ClientTestimonials />
            <Faq />
            <Download />
        </>
    );
}

export default Home;
