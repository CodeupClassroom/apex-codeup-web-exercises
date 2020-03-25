function showMultiplicationTable(input) {
    for(var i = 1; i <= 10; i++) {
        var answer = input * i;

        console.log(input + ' x ' + i + ' = ' + answer);
    }
}

showMultiplicationTable(7);

for (var i = 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;

    if(randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even');
    } else {
        console.log(randomNumber + ' is odd');
    }
}

//#4
for (var i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i));
}

for (var outer = 1; outer <= 9; outer++) {
    //console.log('outer loop');
    var output = "";

    for(var inner = 1; inner <= outer; inner++) {
        output += outer;
    }

    console.log(output);
}