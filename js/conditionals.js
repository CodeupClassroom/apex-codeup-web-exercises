"use strict";
console.log('Hello from the conditionals JS file.');
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// Prompt the user for a number. Will return the number or NaN if they don't enter a number.
function promptForNumber(message) {
    var numberInput = prompt(message);
    return parseInt(numberInput);
}

// Takes a number and returns the text "even" or "odd" depending on the number.
function evenOrOdd(aNumber) {
    if (aNumber % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

function plus100(aNumber) {
    return aNumber + 100;
}

//Take a number and return the text "positive" or "negative" depending on the number.
function negativeOrPositive(aNumber) {
    return (aNumber >= 0) ? "positive" : "negative";
}
/*
var isEnteringNumber = confirm('Would you like to enter a number?');

if (isEnteringNumber) {
    //console.log('Entering a number.');
    var parsedNumber = promptForNumber('Please enter a number.');

    //console.log(parsedNumber, isNaN(parsedNumber));

    if(isNaN(parsedNumber)) {
        alert("You didn't enter a number");
    } else {
        alert("You entered a number.");
        // * - whether the number is even or odd.
        alert('The number is ' + evenOrOdd(parsedNumber));
        // * - what the number plus 100 is
        alert('The number plus 100 is ' + plus100(parsedNumber));
        // * - if the number is negative or positive
        alert('The number is ' + negativeOrPositive(parsedNumber));
    }
}
*/

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    switch (color) {
        case "blue":
            return color + " is the color of the sky";
            break;
        case "red":
            return "Strawberries are " + color;
            break;
        case "cyan":
            return "I don't know anything about " + color;
            break;
        default:
            return color + " is not valid";
            break;
    }
}

console.log(analyzeColor('blue')); // returns "blue is the color of the sky"
console.log(analyzeColor('red')); // returns "Strawberries are red"
console.log(analyzeColor('cyan')); // returns "I don't know anything about cyan"
console.log(analyzeColor('green'));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log('Should be different every time.', analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// Done, see above ^

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//var colorInput = prompt('Please enter a color.');
//alert(analyzeColor(colorInput));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, totalBill){
    if (luckyNumber === 0 || luckyNumber > 5) {
        return totalBill;
    } else if (luckyNumber === 1) {
        return totalBill * .90;
    } else if (luckyNumber === 2) {
        return totalBill * .75;
    } else if (luckyNumber === 3) {
        return totalBill * .65;
    } else if (luckyNumber === 4) {
        return totalBill * .50;
    } else if (luckyNumber === 5) {
        return 0;
    }
}

console.log('calculateTotal(0, 100)', calculateTotal(0, 100));
console.log('calculateTotal(1, 100)', calculateTotal(1, 100));
console.log('calculateTotal(2, 100)', calculateTotal(2, 100));
console.log('calculateTotal(3, 100)', calculateTotal(3, 100));
console.log('calculateTotal(4, 100)', calculateTotal(4, 100));
console.log('calculateTotal(5, 100)', calculateTotal(5, 100));
console.log('calculateTotal(6, 100)', calculateTotal(6, 100));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var parsedNumber = promptForNumber('Please enter your total bill.');
//console.log('typeof parsedNumber', typeof parsedNumber);
var finalTotal = calculateTotal(luckyNumber, parsedNumber);
alert('Your lucky number is ' + luckyNumber);
alert('Total before discount is ' + parsedNumber);
alert('Total after discount is ' + finalTotal);