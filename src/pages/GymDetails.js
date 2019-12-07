import React, { Component } from "react";
import "../styles/GymDetails.css";
import GymHeaderDetails from "../components/GymHeaderDetails";
import Reviews from "../components/Reviews";
import ContactStrip from "../components/ContactStrip";
import PhotoGrid from "../components/PhotoGrid";
import SuggestedGym from "../components/SuggestedGym";

class GymDetails extends Component {
    render() {
        return (
            <div id="gym-details-container">
                <a a className="back-button" href="/">
                    <p>
                        <span className="arrow">←</span> Back
                    </p>
                </a>
                <img
                    className="fw-image"
                    src="https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
                    alt="boxing walkout"
                />
                <div id="gym-items-container">
                    <GymHeaderDetails />
                </div>
                <div className="content-container">
                    <h2>Photos</h2>
                    <PhotoGrid />
                    <h2>Reviews</h2>
                    <Reviews />
                    <ContactStrip />
                    <h2>Suggested Gyms</h2>
                    <div className="suggested-gyms">
                        <SuggestedGym />
                        <SuggestedGym />
                    </div>
                </div>
            </div>
        );
    }
}

export default GymDetails;
