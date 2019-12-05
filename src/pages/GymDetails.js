import React, { Component } from "react";
import GymItem from "../components/GymItem";
import "../styles/GymDetails.css";

class GymDetails extends Component {
    render() {
        return (
            <div id="">
                <img className="fw-image" src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80" alt="boxing walkout" />
                <div id="main-canvas">
                    <GymItem />
                </div>
            </div>
           
        );
    }
}

export default GymDetails;
