/*jshint esversion: 6 */
(function () {
    let locationPromise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            resolve(position);
        });
    });

    locationPromise
        .then(displayLocation)
        .catch((error) => {
            let errMessage = $("#main");
            errMessage.html("Cannot get location!");
        });

    function displayLocation(position) {
        let imgSrc = `http://maps.googleapis.com/maps/api/staticmap?center=${position.coords.latitude},${position.coords.longitude}&zoom=18&size=600x600&sensor=true`;
        $("#locationMap").attr("src", imgSrc);
    }
}());