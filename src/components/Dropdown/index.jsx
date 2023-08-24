import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <article className="dropdown-container">
            <div
                className={`dropdown-title ${isOpen ? "open" : ""}`}
                onClick={handleToggle}
            >
                {props.title}
                <div className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            {isOpen && <div className="dropdown-content">{props.children}</div>}
        </article>
    );
}

export default Dropdown;
