// Demo : Arrays

// "Bmw,Mercedes,Opel,Mazda" elemanlarına sahip bir dizi oluşturun.
let arr = ['BMW', 'Mercedes', 'Opel', 'Mazda']
console.log(arr)

//Dizi kaç elemanlıdır?
console.log(arr.length)

// Dizinin ilk ve son elemanı nedir ?
console.log(arr[0])
console.log(arr[arr.length - 1])

// "Renault" değerini dizinin sonuna ekleyin.
arr.push('Renault')

// "Toyota" değerini dizinin başına ekleyin.
arr.unshift('Toyota')
arr.unshift('Seat');

// "Seat" değerini siliniz.
arr.shift();

// "Renault" değerini siliniz.
arr.pop();

// Dizi elemanlarını ters çevirin
arr.reverse()

// Dizi elemanlarını alfabetik olarak sıralayın.
arr.sort();

// [1,2,5,80] dizisini sıralayın.
let numbers = [1, 2, 5, 80];
console.log(numbers.sort())

// "Opel" değeri dizinin bir elemanımıdır ?
console.log(arr.indexOf('Opel'))
console.log(arr.includes('Opel'))

// var str = "Chevrolet,Dacia";
// ifadesini diziye çeviriniz.
var str = "Chevrolet,Dacia";
var arr2 = str.split(',');
console.log(arr2)

// Oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
let val = arr.concat(arr2)
console.log(val);

// Oluşturulan diziden son 2 elemanı siliniz.
val.splice(val.length - 2, 2)

console.log(val);
console.log(arr);
/* Aşağıda verilen elemanları bir dizi içerisinde saklayınız.
     
     studentA : Yiğit Bilgi 2010
     StudentB : Sena Turan  1999
     studentC : Ahmet Turan 1998   

*/

let studentA = ['Yiğit', 'Bilgi', 2010]
let studentB = ['Sena', 'Turan', 1999]
let studentC = ['Ahmet', 'Turan', 1998]

let students = [studentA, studentB, studentC]


console.log(students)
console.log(students[0][0])