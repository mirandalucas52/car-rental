import { useEffect, useState } from "react";
import "./Book-Box.css";

function BookBox() {
    const [datas, setDatas] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("datas.json");
            const data = await response.json();
            // Filtre les données pour ne garder que les objets ayant la clé "name"
            const filteredData = data.filter((item) =>
                item.hasOwnProperty("name")
            );
            setDatas(filteredData);
            setCities(data[data.length - 1].city);
        };
        fetchData();
    }, []);

    return (
        <section className="bookBoxContainer">
            <div className="formContent">
                <h3>Book a car</h3>
                <form className="bookForm">
                    <div className="boxFormCarType">
                        <label>
                            <i className="fa-solid fa-car"></i>
                            &nbsp; Select Your Car Type <b>*</b>
                        </label>
                        <select aria-label="Car Type">
                            <option value="">Select your car type</option>
                            {datas.map((item) => (
                                <option key={item.name} value={item.name}>
                                    {item.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="boxFormCarType">
                        <label>
                            <i className="fa-solid fa-location-dot"></i> &nbsp;
                            Pick-up <b>*</b>
                        </label>
                        <select aria-label="Pick up Location">
                            <option value="">Select pick up location</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="boxFormCarType">
                        <label>
                            <i className="fa-solid fa-location-dot"></i> &nbsp;
                            Drop-off <b>*</b>
                        </label>
                        <select aria-label="Drop off location">
                            <option value="Drop off">
                                Select drop off location
                            </option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="boxFormCarType">
                        <label htmlFor="pickTime">
                            <i className="fa-regular fa-calendar-days "></i>{" "}
                            &nbsp; Pick-up <b>*</b>
                        </label>
                        <input
                            id="picktime"
                            type="date"
                            defaultValue=""
                        ></input>
                    </div>
                    <div className="boxFormCarType">
                        <label htmlFor="pickTime">
                            <i className="fa-regular fa-calendar-days "></i>{" "}
                            &nbsp; Drop-off <b>*</b>
                        </label>
                        <input
                            id="picktime"
                            type="date"
                            defaultValue=""
                        ></input>
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
        </section>
    );
}

export default BookBox;
