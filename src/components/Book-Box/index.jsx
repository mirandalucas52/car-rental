import { useEffect, useState } from "react";
import "./Book-Box.css";

function BookBox() {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("datas.json");
            const data = await response.json();
            setDatas(data);
        };
        fetchData();
    }, []);

    if (datas.length === 0) {
        return <div>Loading...</div>;
    }

    const cities = datas[datas.length - 1].city;

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
                        <select>
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
                        <select>
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
                        <select>
                            <option value="">Select drop off location</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="boxFormCarType">
                        <label htmlFor="pickTime">
                            <i class="fa-regular fa-calendar-days "></i> &nbsp;
                            Pick-up <b>*</b>
                        </label>
                        <input id="picktime" type="date" value=""></input>
                    </div>
                    <div className="boxFormCarType">
                        <label htmlFor="pickTime">
                            <i class="fa-regular fa-calendar-days "></i> &nbsp;
                            Drop-off <b>*</b>
                        </label>
                        <input id="picktime" type="date" value=""></input>
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
        </section>
    );
}

export default BookBox;
