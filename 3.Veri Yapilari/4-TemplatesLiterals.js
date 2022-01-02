//Template Literals


const fullName = 'Zeren Onder.';
const city = 'Izmir';
const yearofBirth = 1988;

let val;

val = 'my name is' + fullName +
    " I'm " + (2022 - yearofBirth) + ' years old.' + "I live in " + city + ".";

//ternary operator
val = `My name is ${fullName} I'm ${(2022-yearofBirth>=18)? 'over 18':'under 18'} and I live in ${city}`
console.log(val)