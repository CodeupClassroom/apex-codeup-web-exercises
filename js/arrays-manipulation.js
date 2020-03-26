var names = ["Fer", "Douglas", "Zach", "Vivian", "Sophie"];
var numbers = [22, 12, 67, 3, 10];

console.log('original' ,names);

// goes to the beginning of the array
names.unshift( prompt("Give me your name:") );

console.log(names);

names.push( prompt("Give me your name:") );

console.log(names);

console.log('names before pop()' , names);

// if you care about the element that we removed
var removedItem = names.pop();

// confirms which element was removed
alert( removedItem + ' was removed' );

var firstItemRemoved = names.shift();
alert( firstItemRemoved + ' was removed' );

console.log(names.indexOf("Fer"));
console.log(names.indexOf("Fers"));

console.log('names.indexOf(12): ' ,names.indexOf(12));
names.push(0);
names.push("12");
console.log(names);
console.log('names.indexOf("12"): ',names.indexOf("12"));

var pieces = names.slice(3);
console.log('pieces: ', pieces);

var piecesByRange = names.slice(1, 4);
console.log('piecesByRange: ', piecesByRange);

names.reverse();
console.log('names.reverse(): ', names);

names.sort();
numbers.sort();
console.log('From A to Z: ', names);
names.reverse();
console.log('from Z to A: ', names);
console.log('numbers.sort(): ', numbers);

var salariesString = "500,324|900,456|600,212";
var salariesArray = salariesString.split("|");

console.log(salariesString);
console.log(salariesArray);

var addresses = "John,Doe,120 jefferson st.,Riverside, NJ, 08075, Jack,McGinnis,220 hobo Av.,Phila, PA,09119";

var addressArray = addresses.split(",");
console.log('addressArray', addressArray);

var namesCSV = names.join(",");
console.log('namesCSV', namesCSV);

var numbersString = numbers.join("|");
console.log('numbersString', numbersString);