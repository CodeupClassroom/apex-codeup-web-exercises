console.log('Hello from the BOM lecture.');

var numberOfTimesRun = 0;

var intervalFunction = function() {
    console.log('Are we there yet? ' + numberOfTimesRun);
    numberOfTimesRun++;
};

intervalFunction();

// var interval = setInterval(function(){
//     console.log('Are we there yet? ' + numberOfTimesRun);
//     numberOfTimesRun++;
// }, 1000);

//var interval = setInterval(intervalFunction, 1000);
//console.log('interval ' + interval);
//clearInterval(interval);
var names = ["Douglas", "Fernando", "Dimitri", "Christian"];

// Example of a "Higher order function". A function that takes a function as a parameter and calls that function later.
function myForEach(array, callback) {
    for(var index = 0; index < array.length; index++){
        callback(array[index], index, array);
    }
}

myForEach(names, function(name, index, currentArray) {
    console.log('Element: ' + name);
    console.log('Current Index: ' + index);
    console.log('The entire array: ' + currentArray)
});

console.log('Using an anonymous function assigned to a variable.');
var processElement = function(name, index, currentArray) {
    console.log('Element: ' + name);
    console.log('Current Index: ' + index);
    console.log('The entire array: ' + currentArray)
};

myForEach(names, processElement);

setTimeout(intervalFunction, 5000);

setTimeout(function(){
    console.log('Hello one second from the page load.');
}, 1000);
