(function(){
    "use strict";
    console.log("arrays exercise");

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Douglas", "Fer", "Sophie", "Vivian"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[3]);
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(var index = 0; index < names.length; index++){
        console.log('From for loop' , names[index]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(item){
        console.log('From the Foreach', item);
    });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first( array ){
        return array[0];
    }

    function second( array ){
        return array[1];
    }

    function last( array ){
        return array[array.length-1];
    }

    var numbers = [1, 2, 3, 4, 5];
    var result = first(numbers);

    console.log('1: first()' , result === 1 );
    // console.error('error: first()' , result !== 1 );
    result = first(names);
    console.log('2: first()', result === 'Douglas');

    result = second(numbers);
    console.log('1: second()' , result === 2 );
    result = second(names);
    console.log('2: second()' , result === 'Fer' );

    result = last(numbers);
    console.log('1: last()' , result === 5 );
    result = last(names);
    console.log('2: last()' , result === "Vivian");

})();
