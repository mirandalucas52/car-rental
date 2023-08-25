import HeroFerrari from "../../components/Hero-Ferrari";
import BookCar from "../../components/Book-Car";
import VehicleModels from "../../components/Vehicle-Model";

function Models() {
    return (
        <div className="Models">
            <HeroFerrari title="Vehicle Models" subtitle="Vehicle Models" />
            <VehicleModels />
            <BookCar />
        </div>
    );
}

export default Models;
