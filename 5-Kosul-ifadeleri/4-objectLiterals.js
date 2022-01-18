//Object Literals

let val;

let person = {
    firstName: 'Can',
    lastName: 'Onder',
    age: 24,
    hobbies: ['Pc oynamak,Kitap okumak,Dizi izlemek'],
    adress: {
        city: 'Bandırma',
        country: 'Türkiye'
    },
    getBirthYear: function() {
        return 2022 - this.age;
    }
};

val = person.firstName;
val = person.lastName
val = person['firstName']
val = person.adress
val = person.adress.city
val = person.hobbies.length
val = person.hobbies
val = person.getBirthYear()
console.log(val)
console.log(typeof person)

//#########################################

let people = [
    { firstName: 'İbrahim', lastName: 'Önder' },
    { firstName: 'İbrahim', lastName: 'Önder' },
    { firstName: 'İbrahim', lastName: 'Önder' }
];

val = people[2];
val = people[2].firstName;
console.log(val)
console.log(typeof people)