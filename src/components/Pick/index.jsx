import "./Pick.css";
import { useEffect, useState } from "react";

function Pick() {
    const [datas, setDatas] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);

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

    // Fonction pour gérer le clic sur un bouton de voiture
    const handleCarSelection = (car) => {
        setSelectedCar(car);
    };

    return (
        <section className="pickSection">
            <h1>Modèles de véhicules</h1>
            <h2>Notre flotte de location</h2>
            <p>
                Choisissez parmi une variété de nos incroyables véhicules à
                louer pour votre prochaine aventure ou voyage d'affaires.
            </p>
            <div>
                <div className="pickBox">
                    {datas.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleCarSelection(item)}
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
                                <h3>{selectedCar.price}</h3>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Pick;
