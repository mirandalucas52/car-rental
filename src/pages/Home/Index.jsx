import Hero from "../../components/Hero/index";
import HeroBg from "../../assets/hero-bg.png";
import "./Home.css";
import BookBox from "../../components/Book-Box";
import Plan from "../../components/Plan";

function Home() {
    return (
        <>
            <Hero />
            <img className="heroBg" src={HeroBg} alt="" />
            <BookBox />
            <Plan />
        </>
    );
}

export default Home;
