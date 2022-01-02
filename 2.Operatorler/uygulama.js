//UYGULAMA
//1-Can ve Ada'nın boy ve kg bilgilerini alın
//2- Alınan bilgilere göre kilo indeslerini hesaplayın
//Formül = Kişinin Kilosu / Boy Uzunluğunun karesi
//3- Hesaplanın index bilgisine göre karşılaştırma yapınız.
//4- Aaşğıda ki tabloya göre can ve adanın hangi gruba giriyor
//0-18,4 : Zayıf
//18,5 - 24,0 : Normal
//25,0 - 29.9 : Fazla Kilolu
//30,0 - 34,9 : Obez

let indexCan;
let indexAda;

const canKilo = 60;
const canBoy = 1.87;

const adaKilo = 50;
const adaBoy = 1.62;

indexAda = (adaKilo) / (adaBoy * adaBoy)
indexCan = (canKilo) / (canBoy * canBoy)

console.log(indexAda.toFixed(2), indexCan.toFixed(2))

let zayıfAda = (indexAda >= 0) && (indexAda <= 18.4)
console.log("Ada Zayıf mı?", zayıfAda)

let normalAda = (indexAda >= 18.5) && (indexAda <= 24)
console.log("Ada Normal mi?", normalAda)

let kiloluAda = (indexAda >= 25) && (indexAda <= 29.9)
console.log("Ada Kilolu mu?", kiloluAda)

let obezAda = (indexAda >= 30) && (indexAda <= 34.9)
console.log("Ada Obez mi?", obezAda)