console.log('Hello from external JavaScript.');

// alert('Welcome to my Website!');
//
// var userResponse = prompt('What is your favorite color.');
//
// alert('Great, ' + userResponse + ' is my favorite color too!');

/*
When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
Use an alert to show the results of each problem.
 */

// var littleMermaid = prompt('How many days do you want to rent The Little Mermaid?');
// var brotherBear = prompt('How many days do you want to rent Brother Bear?');
// var hercules = prompt('How many days do you want to rent Hercules?');
//
// var rentalTotal = (
//     parseInt(littleMermaid) +
//     parseInt(brotherBear) +
//     parseInt(hercules)) * 3;
//
// alert('Total rental $' + rentalTotal);

//Contractor rates
// var googleRate = prompt('What is your rate for Google?');
// googleRate = parseInt(googleRate);
//
// var amazonRate = prompt('What is your rate for Amazon?');
// amazonRate = parseInt(amazonRate);
//
// var facebookRate = prompt('What is your rate for Facebook?');
// facebookRate = parseInt(facebookRate);
//
// //Collect hours
// var googleHours = prompt('How many hours did you work at Google this week?');
// googleHours = parseInt(googleHours);
//
// var amazonHours = prompt('How many hours did you work at Amazon this week?');
// amazonHours = parseInt(amazonHours);
//
// var facebookHours = prompt('How many hours did you work at Facebook this week?');
// facebookHours = parseInt(facebookHours);
//
// var totalDollars = (facebookRate * facebookHours) + (amazonRate * amazonHours) + (googleRate * googleHours);
//
// alert('Total dollars: $' + totalDollars);

// var isClassFull = false;
// var isClassConflict = false;
//
// var canAttendClass = (!isClassFull && !isClassConflict);
// alert('Student can attend class ' + canAttendClass);

var numberOfItems = prompt('How many items do you want to buy?');

numberOfItems = parseInt(numberOfItems);
var numberOfItemsRequired = prompt('How many items are required for the offer?');
numberOfItemsRequired = parseInt(numberOfItemsRequired);

var isOfferNotExpired = true;
var isCustomerPremium = false;

var isOfferValid = (isCustomerPremium && isOfferNotExpired) || (numberOfItems >= numberOfItemsRequired && isOfferNotExpired);

alert('Offer is valid ' + isOfferValid);