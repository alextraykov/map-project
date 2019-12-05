import React from 'react';
import ReactMapGL from 'react-map-gl';

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
      <ReactMapGL
        mapboxApiAccessToken={"pk.eyJ1IjoicG9sZWNhdHNreSIsImEiOiJjano0NmNsOTgwYTIxM2RwYXB0NjFtMHhrIn0.C7TggPuEGoLMKnY7b6Foww"}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}