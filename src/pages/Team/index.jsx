import HeroFerrari from "../../components/Hero-Ferrari";
import BookCar from "../../components/Book-Car";
import OurTeam from "../../components/Our-Team";

function Team() {
    return (
        <div className="Team">
            <HeroFerrari title="Our Team" subtitle="Our Team" />
            <OurTeam />
            <BookCar />
        </div>
    );
}

export default Team;
