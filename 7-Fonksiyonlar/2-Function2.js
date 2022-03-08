//Function Declaration and Expressions
//Function Declaration

function sum1(a, b) {

    let c = a + b;
    return c;
}

console.log(sum1(10, 20))


//Function Expressions

const sum2 = function(a, b) {

    if (typeof a === 'undefined') { a = 0 }
    if (typeof b === 'undefined') { b = 0 }
    var c = a + b
    return c;
}
console.log(sum2(10, 30))
console.log(sum2(20)); // NaN 
console.log(sum2(10, 20, 30, 40));

//ES6 Default Parameters
const sum3 = function(a = 0, b = 0) {

    var c = a + b
    return c;
}

function sumAll() {
    let total = 0

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}


console.log(sum3(10, 30))
console.log(sum3(20));
console.log(sum3(10, 20, 30, 40));
console.log(sumAll(20, 30, 10, 90))