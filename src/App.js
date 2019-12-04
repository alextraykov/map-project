import React, { Component } from "react";
import "./App.css";

// import Fetcher from "./Fetcher";
// import Sidebar from "./components/Sidebar";
import NavBar from "./components/NavBar";
import GymItem from "./components/GymItem";
import Dropdown from "./components/Dropdown";
// import Infobox from "./components/Infobox";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            inputValue: "",
            location: [
                {
                  id: 0,
                  title: 'New York',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 1,
                  title: 'Dublin',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 2,
                  title: 'California',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 3,
                  title: 'Istanbul',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 4,
                  title: 'Izmir',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 5,
                  title: 'Oslo',
                  selected: false,
                  key: 'location'
                },
                {
                  id: 6,
                  title: 'Zurich',
                  selected: false,
                  key: 'location'
                }
              ],
              fruit: [
                {
                  id: 0,
                  title: 'Apple',
                  selected: false,
                  key: 'fruit'
                },
                {
                  id: 1,
                  title: 'Orange',
                  selected: false,
                  key: 'fruit'
                },
                {
                  id: 2,
                  title: 'Grape',
                  selected: false,
                  key: 'fruit'
                },
                {
                  id: 3,
                  title: 'Pomegranate',
                  selected: false,
                  key: 'fruit'
                },
                {
                  id: 4,
                  title: 'Strawberry',
                  selected: false,
                  key: 'fruit'
                }
              ]
        }
    }



    // componentDidMount() {
    //     let fetcher = new Fetcher();
    //     let googleMapsPromise = fetcher.fetchGoogleMaps();
    //     let placesPromise = fetcher.fetchPlaces();

    //     Promise.all([googleMapsPromise, placesPromise]).then(values => {
    //         let google = values[0];
    //         this.venues = values[1].response.venues;
    //         this.markers = [];

    //         this.google = google;
    //         this.infowindow = new google.maps.InfoWindow();
    //         this.map = new google.maps.Map(document.getElementById("map"), {
    //             zoom: 9,
    //             scrollwheel: true,
    //             center: {
    //                 lat: this.venues[0].location.lat,
    //                 lng: this.venues[0].location.lng
    //             }
    //         });

    //         this.venues.forEach(venue => {
    //             let marker = new google.maps.Marker({
    //                 position: {
    //                     lat: venue.location.lat,
    //                     lng: venue.location.lng
    //                 },
    //                 map: this.map,
    //                 venue: venue,
    //                 id: venue.id,
    //                 name: venue.name,
    //                 animation: google.maps.Animation.DROP
    //             });

    //             marker.addListener("click", () => {
    //                 if (marker.getAnimation() !== null) {
    //                     marker.setAnimation(null);
    //                 } else {
    //                     marker.setAnimation(google.maps.Animation.BOUNCE);
    //                 }
    //                 setTimeout(() => {
    //                     marker.setAnimation(null);
    //                 }, 1500);
    //             });

    //             google.maps.event.addListener(marker, "click", () => {
    //                 this.infowindow.setContent(marker.name);
    //                 //  this.map.setZoom(13);
    //                 this.map.setCenter(marker.position);
    //                 this.infowindow.open(this.map, marker);
    //                 this.map.panBy(0, -125);
    //             });

    //             this.markers.push(marker);
    //         });

    //         this.setState({ filteredVenues: this.venues });
    //     });
    // }

    // listItemClick = venue => {
    //     let marker = this.markers.filter(m => m.id === venue.id)[0];
    //     this.infowindow.setContent(marker.name);
    //     this.map.setCenter(marker.position);
    //     this.infowindow.open(this.map, marker);
    //     this.map.panBy(0, -125);
    //     if (marker.getAnimation() !== null) {
    //         marker.setAnimation(null);
    //     } else {
    //         marker.setAnimation(this.google.maps.Animation.BOUNCE);
    //     }
    //     setTimeout(() => {
    //         marker.setAnimation(null);
    //     }, 1500);
    // };

    // filterVenues = query => {
    //     let f = this.venues.filter(venue =>
    //         venue.name.toLowerCase().includes(query.toLowerCase())
    //     );

    //     this.markers.forEach(marker => {
    //         marker.name.toLowerCase().includes(query.toLowerCase()) === true
    //             ? marker.setVisible(true)
    //             : marker.setVisible(false);
    //     });

    //     this.setState({ filteredVenues: f, query });
    // };

    handleInputChange = inputValue => {
        this.setState({ inputValue: inputValue.trim() });
    };

    render() {
        return (
            <div id="main-canvas">
                <NavBar
                    inputValue={this.state.inputValue}
                    handleInputChange={this.handleInputChange}
                />
                <GymItem />
                <GymItem />
                <GymItem />
                <GymItem />
                <GymItem />
            </div>
           
        );
    }
}

export default App;
