import "./Vehicle-Model.css";
import { useState, useEffect } from "react";

function VehicleModels() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("datas.json");
            const data = await response.json();
            setCars(data.filter((item) => item.cover2)); // Filtrer les éléments avec cover2
        };
        fetchData();
    }, []);

    return (
        <section className="vehicleModelsContainer">
            {cars.map((data, index) => (
                <div className="vehicleModel" key={index}>
                    <img src={data.cover2} alt={`Cover ${data.name}`} />
                    <div className="vehicleModelInfos">
                        <div className="flexInfos">
                            <div>
                                <h1>{data.name2}</h1>
                                <span>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </span>
                                <div className="infosIconText">
                                    <i class="fa-solid fa-car-side"></i> &nbsp;{" "}
                                    {data.model}
                                </div>
                                <div className="infosIconText">
                                    <i class="fa-solid fa-car-side"></i> &nbsp;{" "}
                                    {data.transmission}
                                </div>
                            </div>
                            <div>
                                <h2>${data.price}</h2>
                                <h3>per day</h3>
                                <div className="infosIconText">
                                    {data.doors} &nbsp;
                                    <i class="fa-solid fa-car-side"></i>
                                </div>
                                <div className="infosIconText">
                                    {data.fuel} &nbsp;
                                    <i class="fa-solid fa-car-side"></i>
                                </div>
                            </div>
                        </div>
                        <div className="btnRide">
                            <a href="/">Book Ride</a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default VehicleModels;
