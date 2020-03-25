function showMultiplicationTable(input) {
    for(var i = 1; i <= 10; i++) {
        var answer = input * i;

        console.log(input + ' x ' + i + ' = ' + answer);
    }
}

showMultiplicationTable(7);

// This is how you get a random number between 50 and 100

for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;

    if(randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even');
    } else {
        console.log(randomNumber + ' is odd');
    }
}