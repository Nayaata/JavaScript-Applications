/*jshint esversion: 6 */
(function () {
    "use strict";
    let redirectPromise = new Promise((resolve, reject) => {
        resolve($("#MainWindow").html("<div>Some text to popup you will be redirected in 2 second to funny website!</div>"));
        alert("Click OK!");
    });

    function redirectionPromise() {
        let redirectUrl = "http://www.9gag.com/";

        return new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(window.location = redirectUrl);
            }, 2000);
        });
    }

    redirectPromise
        .then(redirectionPromise);
}());