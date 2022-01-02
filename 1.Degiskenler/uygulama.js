//Kişi Bilgileri
let name = 'Tuba';
let surName = 'Onder';
let fullName = 'Tuba Onder';
let ıd = '78978884948';
let total = 205.6;
let gender = true; //true erkek , false kadın
let adress = {
    city: 'Vancouver',
    district: 'British Columb'
}
let hobbies = ['Sinema', 'Kitap', 'Spor'];

//Sipariş Toplamı

let order1 = Number('100');
let order2 = Number('200');
let totalOrder = order1 + order2;
console.log(totalOrder)

//Sipariş Toplanını Tam sayı olarak 
let order4 = parseInt('100.2')
let order5 = parseInt('150.5');
let totalOrder2 = order4 + order5;
console.log(totalOrder2)

//Verilen dğum yılına göre yaş hesaplayın
let yearOfBirth = 1986;
console.log(new Date().getFullYear() - yearOfBirth)

//String İfadenin karakter sayısını
let course = 'Modern Javascript Kursu';
console.log(course.length);