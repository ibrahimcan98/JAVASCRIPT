// //Arrays

// let names = ['ibrahim', 'tuba', 'izmir', 'nilüfer'];

// let years = [1998, 1998, 2019, 1962]

// let mix = ['ibrahim', 'can', 1998, null, undefined, ['sinema', 'kitap']]


// //Get array item
// console.log(names[0])
// console.log(names[2])

// //Set array item
// names[names.length] = 'izmir'

// //Add item
// years.push(1986); //Son eleman olarak eklenir
// years.unshift(1986); //İlk eleman olarak eklenir

// //remove item
// years.pop() //son eleman silinir
// years.shift() //Baştaki elemanlar silinir

// //indexOf (yerini bulmak için)
// let index = names.indexOf('zeren');
// console.log("index : " + index)

// //Reverse (terse çevir)
// names.reverse();

// //sort (Sıralama yapar)
// years.sort();

// //concat (birleştirme)
// let val = years.concat(names)
// console.log(val)

// // Splice (Ekleme) (2. elemandan sonra eleman silmeyerek ekleme yapar)
// names.splice(2, 0, 'Annem', 'babam')


// function over18(years) {
//     let age = 2022 - years
//     return age >= 18;
// }
// //find(sadece ilk true değerini bulur)
// let val = years.find(over18)

// //filter (tüm değerleri bulur)
// let val = years.filter(over18)



// console.log(val)
// console.log(names)
// console.log(names.length)
// console.log(typeof names)
// console.log(years)

// console.log(mix)