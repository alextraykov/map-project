import React from "react";
import StaticMap from "react-map-gl";

export default class Map extends React.Component {
    state = {
        viewport: {
            width: 250,
            height: 250,
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 9
        }
    };

    render() {
        return (
            <StaticMap
                captureScroll={true}
                captureDrag={true}
                mapboxApiAccessToken={
                    "pk.eyJ1IjoicG9sZWNhdHNreSIsImEiOiJjano0NmNsOTgwYTIxM2RwYXB0NjFtMHhrIn0.C7TggPuEGoLMKnY7b6Foww"
                }
                {...this.state.viewport}
                // Commit changes:
                // Removed onViewportChange handler as we don't want the map to move
                // on the card.
            />
        );
    }
}
