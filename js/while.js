console.log('Hello from the while.js file.');

var theNumber = 2;

while (theNumber <= 65536) {
    console.log(theNumber);
    //theNumber = theNumber * 2;
    theNumber *= 2;
}
