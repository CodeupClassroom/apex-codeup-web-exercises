function isTrue(param){
    return param === true;
}

function isFalse(param){
    return param === false;
}

function not(param){
    return !param;
}

function addOne(param){
    if(param === Infinity){
        return Infinity;
    }
    return parseInt(param) + 1;
}

function isEven(param){
    if(param === false){
        return false;
    }
    return (param % 2) === 0;
}

function isIdentical(param1, param2)  {
    return param1 === param2;
}

function isEqual(param1, param2){
    return param1 == param2;
}

function or(param1, param2){
    return param1 || param2;
}

function and(param1, param2){
    return param1 && param2;
}

function concat(first, second){
    return first + "" + second;
}