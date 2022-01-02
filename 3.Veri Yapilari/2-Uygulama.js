let num = 15.15125125;

//toplamda 3 basamaklı sayı kullan
val = num.toPrecision(3)

//Ondalık kısmı 3 basamakla sınırla
val = num.toFixed(3)

//en yakın sayıya yuvarla
val = Math.round(num)

//Aşağı yuvarla
val = Math.floor(num);

//Yukarı yuvarla
val = Math.ceil(num)

//1,2,10,56,20 sayılarının en küçüğü ve en büyüğünü bul
val = Math.min(1, 2, 10, 56, 20)
val = Math.max(1, 2, 10, 56, 20)

//sayı aralığını kullanıcı belirleyeceği rasgele sayı üret
let min = 50;
let max = 100
val = Math.round(min + Math.random() * (max - min))


/*Bir personelin yaptığı mesai'ye göre aldığı maaşı hesaplayalım
    **Brüt maaş : 3700TL
    **Brüt Mesai : 10.3TL

    Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaş nedir ? 

    Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaş nedir?
*/

let brüt = 3700;
let mesaiUcret = 10.3;
let mesaiSaat = 42;

let toplamBrut = (brüt + (mesaiUcret * mesaiSaat))

let netMaas = (toplamBrut - toplamBrut * 0.25)

console.log('Brüt =' + toplamBrut.toFixed(2), 'Net =' + netMaas.toFixed(2))
console.log(val)