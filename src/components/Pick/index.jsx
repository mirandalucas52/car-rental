import "./Pick.css";
import { useEffect, useState } from "react";

function Pick() {
    const [datas, setDatas] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);
    const [selectedBtnIndex, setSelectedBtnIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("datas.json");
            const data = await response.json();
            const filteredData = data.filter((item) =>
                item.hasOwnProperty("name")
            );
            setDatas(filteredData);

            // Sélectionne la première voiture par défaut si le tableau de données n'est pas vide
            if (filteredData.length > 0) {
                setSelectedCar(filteredData[0]);
            }
        };
        fetchData();
    }, []);

    const handleCarSelection = (car, index) => {
        setSelectedCar(car);
        setSelectedBtnIndex(index);
    };

    return (
        <section className="pickSection">
            <div className="pickTxt">
                <h1>Vehicle Models</h1>
                <h2>Our rental fleet</h2>
                <p>
                    Choose from a variety of our amazing vehicles to rent for
                    your next adventure or business trip
                </p>
            </div>
            <div className="pickFlex">
                <div className="pickBox">
                    {datas.map((item, index) => (
                        <button
                            className={`pickBtn ${
                                selectedBtnIndex === index ? "selectedBtn" : ""
                            }`}
                            key={item.id}
                            onClick={() => handleCarSelection(item, index)}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
                <div className="boxCarsAndInfo">
                    {selectedCar && (
                        <>
                            <div className="carImg">
                                <img
                                    src={selectedCar.cover}
                                    alt={selectedCar.name}
                                />
                            </div>
                            <div className="carDesc">
                                <div className="carDescPrice">
                                    <span>${selectedCar.price} </span>/ rent per
                                    day
                                </div>
                                <div className="carDescInfo">
                                    <div>
                                        <span>Model</span>
                                        <span>{selectedCar.model}</span>
                                    </div>
                                    <div>
                                        <span>Mark</span>
                                        <span>{selectedCar.mark}</span>
                                    </div>
                                    <div>
                                        <span>Year</span>
                                        <span>{selectedCar.year}</span>
                                    </div>
                                    <div>
                                        <span>Doors</span>
                                        <span>{selectedCar.doors}</span>
                                    </div>
                                    <div>
                                        <span>AC</span>
                                        <span>{selectedCar.ac}</span>
                                    </div>
                                    <div>
                                        <span>Transmission</span>
                                        <span>{selectedCar.transmission}</span>
                                    </div>
                                    <div>
                                        <span>Fuel</span>
                                        <span>{selectedCar.fuel}</span>
                                    </div>
                                </div>
                                <a class="reserveBtn" href="/">
                                    Reserve Now
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Pick;
