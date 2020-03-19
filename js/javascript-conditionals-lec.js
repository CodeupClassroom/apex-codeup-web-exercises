console.log('Hello');

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }

var isAdmin = true;
if (isAdmin) {
    console.log("Turn on the admin navbar.")
}

// Send a 20% off coupon if its users birthday

var isBirthday = true;
if (isBirthday) {
    console.log('Send them the coupon.')
}

// Do I have enough money to buy this item?

var currentBalance = 1000;
var itemCost = 500;

if(currentBalance > itemCost) {
    //alert('You can buy it!');
}

// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }

var isAdmin = false;
if(isAdmin) {
    // If true run this code.
    console.log('Displaying admin navbar.')
} else {
    // If false run this code.
    console.log('Displaying regular navbar.')
}

// var numberOfLives = 3;
//
// if (numberOfLives === 0) {
//     //alert('Game Over :(');
// } else {
//     //alert('Next level!');
// }

// Refactor number of lives into a function.
function checkIfGameOver(numberOfLives) {
    if (numberOfLives === 0) {
        return "Sorry, game over. :(";
    } else {
        return "Next level!";
    }
}

//alert(checkIfGameOver(0));
//alert(checkIfGameOver(5));

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

// var weather = "raining";
// if ( weather === "snowing" ) {
//     alert("Stay inside!");
// } else if ( weather === "raining" ) {
//     alert("Get an umbrella.");
// } else {
//     alert("You are good to go. Enjoy the weather.");
// }

function checkWeather(weather) {
    if ( weather === "snowing" || weather === "hailing" ) {
        return "Stay inside!";
    } else if ( weather === "raining" ) {
        return "Get an umbrella.";
    } else {
        return "You are good to go. Enjoy the weather.";
    }
}

console.log(checkWeather("snowing"));
console.log(checkWeather("raining"));
console.log(checkWeather("sunny"));
console.log(checkWeather("hailing"));

// var pizzaPreference = prompt("What kind of pizza do you like?").toLowerCase();
//
// if (pizzaPreference === "pepperoni") {
//     alert('What a coincidence, I love that one too.');
// } else if (pizzaPreference === "pineapple and hot sauce") {
//     alert('That is a spicy pizza.')
// } else if (pizzaPreference === "steak") {
//     alert('Steak is great!');
// } else if (pizzaPreference === "cheese") {
//     alert('Plain cheese is okay!');
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some.");
// }

// ================ NESTED STATEMENTS ===============
// If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligible for a license.

// var userAge = 17;
// var hasPermit = true;
//
// if( userAge < 15 ) {
//     alert("You are not eligible for a permit.");
// } else {
//     // all other possibilities.
//     if( userAge === 15 ) {
//         alert("You are eligible for a learner's permit.");
//     } else if (userAge >= 16 && hasPermit) {
//         alert("You can get a driver's license.");
//     } else if ((userAge >= 16) && !hasPermit) {
//         alert("You are not eligible for a license. :(");
//     } else {
//         alert("We don't have enough information to determine your eligibility. :( :(");
//     }
// }

var message;
var success = false;

// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong. ¯\\_(ツ)_/¯";
// }

// Ternary expression.
message = (success) ? "Operation was successful." : "Oops, something went wrong. ¯\\_(ツ)_/¯";

console.log(message);

var weather = "sunny";
var weatherMessage = (weather === "rainy") ? "It's raining!" : "Have a nice day! :)";

// if(weather ==="rainy") {
//     weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day. :)";
// }

console.log(weatherMessage);

// var pizzaPreference = prompt("What kind of pizza do you like?").toLowerCase();
//
// if (pizzaPreference === "pepperoni") {
//     alert('What a coincidence, I love that one too.');
// } else if (pizzaPreference === "pineapple and hot sauce") {
//     alert('That is a spicy pizza.')
// } else if (pizzaPreference === "steak") {
//     alert('Steak is great!');
// } else if (pizzaPreference === "cheese") {
//     alert('Plain cheese is okay!');
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some.");
// }

// As a switch statement:
var pizzaPreference = prompt("What kind of pizza do you like?").toLowerCase();
var pizzaConfirmation;

switch (pizzaPreference) {
    case "pepperoni":
        pizzaConfirmation = "What a coincidence, I love that one too.";
        break;
    case "pineapple and hot sauce":
        pizzaConfirmation = "That is a spicy pizza.";
        break;
    case "steak":
        pizzaConfirmation = "Steak is great!";
        break;
    case "cheese":
        pizzaConfirmation = "Plain cheese is okay!";
        break;
    default:
        pizzaConfirmation = pizzaPreference + " isn't my favorite, but let's order some.";
        break;
}

console.log(pizzaConfirmation);
