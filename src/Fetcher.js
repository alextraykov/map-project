export default class Fetcher {
    fetchGoogleMaps() {
        return new Promise(function(resolve, reject) {
            // define the global callback that will run when google maps is loaded
            window.resolveGoogleMapsPromise = function() {
                // resolve the google object
                resolve(window.google);
                // delete the global callback to tidy up since it is no longer needed
                delete window.resolveGoogleMapsPromise;
            };
            // Now, Load the Google Maps API
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${process.env.REACT_APP_API_KEY}&callback=resolveGoogleMapsPromise`;
            script.async = true;
            document.body.appendChild(script);
        });
    }

    fetchPlaces() {
        var apiURL = `https://api.foursquare.com/v2/venues/search?client_id=WEA5DGFHYPFUZDSRT3PJSZLC0TTZKDOCHJMRE2HQWYECNZMD&client_secret=NJQQBRJFHK5V54QL1XNVJ1YCIPDCQYV1BC02G5SBPXKGBHTD&v=20130815%20&limit=50&near=${process.env.REACT_APP_CITY}&query=${process.env.REACT_APP_FOURSQUARE_QUERY}`;

        return fetch(apiURL).then(resp => resp.json());
    }
}
