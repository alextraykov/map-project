import React, { Component } from "react";
import "../App.css";
class Sidebar extends Component {
    render() {
        return (
            <div id="sidebar">
                <input
                    className="inputField"
                    placeholder="filter content"
                    value={this.props.query}
                    onChange={e => {
                        this.filterVenues(e.target.value);
                    }}
                />
                <br />
                <br />
                {this.props.filteredVenues &&
                    this.props.filteredVenues.length > 0 &&
                    this.props.filteredVenues.map((venue, index) => (
                        <div
                            key={index}
                            className="venue-item"
                            onClick={() => {
                                this.state.listItemClick(venue);
                            }}
                        >
                            {venue.name}
                        </div>
                    ))}
            </div>
        );
    }
}

export default Sidebar;
