console.log('Hello from the while.js file.');

var theNumber = 2;

while (theNumber <= 65536) {
    console.log(theNumber);
    //theNumber = theNumber * 2;
    theNumber *= 2;
}

// Ice cream seller

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

do {

    var conesToPurchase = Math.floor(Math.random() * 5) + 1;
    console.log('All cones: ' + allCones + ' Cones to purchase: ' + conesToPurchase)
    if(conesToPurchase <= allCones) {
        //     //I can sell the cones.
        console.log(conesToPurchase + " cones sold...");
        //     //allCones = conesToPurchase - allCones;
        allCones -= conesToPurchase;
    } else {
        //I do not have enough cones to sell.
        console.log("Cannot sell you " + conesToPurchase + " cones I only have "+ allCones +"...")
    }

    //allCones -= 1;
    console.log(allCones);
} while (allCones > 0);

console.log("Yay! I sold them all!");

