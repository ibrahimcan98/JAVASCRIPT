//Scopes 


//** Global Scopes
var name = 'İbrahim'
var age = 25


function logName() {
    var name = 'Tuba';
    var age = 12;
    console.log('Function scope', name, age)
}


if (true) {
    var age = 30
    console.log('block scope', name, age)
}

console.log(age)
logName()
console.log(name)


//** Local Scopes

//Fonksiyonlar kendi scope'lerini oluşturur...
//Blocklar yeni scope oluşturmaz...

//**ES6 ile gelen let ve cost block scope oluşturur..**//

console.log('*********************************')

if (true) {
    var model = 'Opel'
    let year = 2016;
    const color = 'white'
    console.log('block scope', model, year, color)
}
console.log(model)
    // console.log(color) // HATA VERİR

var a = 1

for (let i = 0; i < 10; i++) {
    console.log('i', i);

}
console.log(i)