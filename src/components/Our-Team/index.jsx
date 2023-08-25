import "./Our-Team.css";
import { useState, useEffect } from "react";

function VehicleModels() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("team.json");
            const data = await response.json();
            setTeam(data);
        };
        fetchData();
    }, []);

    return (
        <section className="ourTeamContainer">
            {team.map((data, index) => (
                <div className="ourTeamCard" key={index}>
                    <img src={data.cover} alt={`Cover ${data.name}`} />
                    <div className="ourTeamInfo">
                        <h1>{data.name}</h1>
                        <h2>{data.work}</h2>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default VehicleModels;
