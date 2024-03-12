const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b){
    if(b != 0){
        return a / b;
    } else{
        return "Can't divide by zero!";
    }
};

const modulus = function(number, modulus){
    if(modulus > 0){
        return number % modulus;
    } else{
        return "Modulus must be a positive integer!";
    }
};

const even = null;

const odd = null;

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
