// Ders 2: Değişkenler

// var age;
// console.log(age);

// age = 20
// console.log(age)


// var fullName = 'Ibrahim Can'
// console.log(fullName)


// //Değişken Tanımlama Kuralları//

// //Sayısal ifadeyle başlayamaz

// var yas1
// var _yas2
// var $yas3

// //Komut isimleriyle tanımlama yapılamaz(for switch vs)


// //Birden fazla Kelime kullanılamaz

// var ad = 'Ibrahim'
// var soyad = 'Onder'

// var ad_soyad = 'Ibrahim  Onder'


// //Case sensitive ( büyük küçük harf duyarlılığı)

// var firstName = 'Ibrahim'
// var FirstName = 'Can'

// console.log(firstName)
// console.log(FirstName)


// //VAR LET CONST

// let city = 'Bandırma';
// console.log(city)


// //Const ile yaptığın değişkeni değiştiremezsin
// //Değiştirmek istemediğin değişken (Sabit Değişken)
// const email = 'abc@hotmail.com ';
// console.log(email)

// email = 'dcd@hotmail.com'
// console.log(email)


// //****************************************
// //Ders 3: Değişken Tipleri

// //1-Privite Types
// //String
// let firstName = 'Can'
// console.log(typeof firstName);
// //Number
// let age = 23
// console.log(typeof age);
// //Boolean
// let isActive = false;
// console.log(typeof isActive)
//     //null
// let job = null
// console.log(typeof job)
//     //Undefied
// let car;
// console.log(typeof car);

// //2-Reference Types (Object)
// //Array
// let names = ['Ali', 'Ahmet', 'Mehmet']
// console.log(typeof names);
// //Object
// let adress = {
//     city: 'Bandırma',
//     country: 'Türkiye',
// }
// console.log(typeof adress);
// //Function
// var calculateAge = function() {
//     return 0;
// }
// console.log(typeof calculateAge);



// //****************************************
// //Ders 4: Tür Dönüşümü
// let num1 = Number('5');
// let num2 = Number('13');
// let total = num1 + num2
// console.log(total);
// console.log(typeof total);
// let val;

// //number to string
// val = String(10);

// //Bool to String
// val = String(true)

// //Date to String
// val = String(new Date().getFullYear());

// //Array to String
// val = String([1, 2, 3, 4]);

// //toString()
// val = (10).toString();
// val = (false).toString();

// //String to Number
// val = Number('18')
// val = Number(true)
// val = Number(false)
// val = Number(null)
// val = Number('a')

// //parseInt
// //parseFloat
// val = parseInt('10');
// val = parseInt('10.5');
// val = parseFloat('10.5');


// console.log(val)
// console.log(typeof val)
// console.log(val.length)
// console.log(val.toFixed(2))