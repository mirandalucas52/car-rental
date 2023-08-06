import Hero from "../../components/Hero/index";
import HeroBg from "../../assets/hero-bg.png";
import "./Home.css";
import BookBox from "../../components/Book-Box";
import Plan from "../../components/Plan";
import Pick from "../../components/Pick";

function Home() {
    return (
        <>
            <Hero />
            <img className="heroBg" src={HeroBg} alt="" />
            <BookBox />
            <Plan />
            <Pick />
        </>
    );
}

export default Home;
