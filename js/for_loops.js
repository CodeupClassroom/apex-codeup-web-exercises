function showMultiplicationTable(input) {
    for(var i = 1; i <= 10; i++) {
        var answer = input * i;

        console.log(input + ' x ' + i + ' = ' + answer);
    }
}

showMultiplicationTable(7);