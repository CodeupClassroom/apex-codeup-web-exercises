(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,
        getArea: function () {
            var area = Math.PI * (Math.pow(this.radius, 2));
            return area;
        },
        logInfo: function (doRounding) {

            var calculatedArea = this.getArea();

            if(doRounding === true){
                calculatedArea = Math.round( calculatedArea );
            }

            console.log("Area of a circle with radius: " + this.radius + ", is: " +  calculatedArea);
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
