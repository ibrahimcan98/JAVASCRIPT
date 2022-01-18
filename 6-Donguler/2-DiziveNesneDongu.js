// Loops in Array&Objects


let cars = ['Bmw', 'Merceders', 'Toyota'];
let people = [
    { firstName: 'Tuba', lastName: 'Onder' },
    { firstName: 'Ibrahim', lastName: 'Onder' },
    { firstName: 'Nilüfer', lastName: 'Onder' },
];

// //Arrays
for (i = 0; i <= 2; i++) {
    console.log(cars[i])
}

// //Object
for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstName)
}

//#########################
// //FOR IN 
//Array
for (let i in cars) {
    console.log(`index : ${i} value:${cars[i]}`);
}
//Object
for (let i in people) {
    console.log(`index:${i} value:${people[i].firstName}`)
}

//#############################
//For Each
//Array
cars.forEach(function(item) {
        console.log(item)
    })
    //Object
people.forEach(function(say) {
        console.log(say)
    })
    //############################

//map : returns an array
let val = people.map(function(item) {
    return item.firstName + ' ' + item.lastName
})
console.log(val)

let numbers = [1, 5, 7, 10, 12];
let num = numbers.map(function(n) {
    return n * n;
})
console.log(num)