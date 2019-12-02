import React from "react";
import "../styles/NavBar.css";

export default function NavBar(props) {
    return (
        <input
            type="text"
            value={props.inputValue}
            placeholder="Search"
            id="nav-input"
            onChange={e => props.handleInputChange(e.target.value)}
        />
    );
}
