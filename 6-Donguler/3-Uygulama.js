/* 
Demo Loops : Sayı Tahmin Oyunu

1-10 arası ragele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın.

** Puanlama yapın
**Kullanıcı kaç kerede bileceği belirtilsin.
*/


let tahmin, sayac = 0,
    puan = 100;
let hak, can
let sayi = Math.round(Math.random() * 9 + 1)
can = Number(prompt('Kaç kere oynayacaksınız?'));
hak = can;
console.log(sayi);


while (hak > 0) {
    hak--;
    sayac++;
    tahmin = Number(prompt('Bir Sayi Giriniz'));

    if (sayi == tahmin) {
        console.log(`${sayac}. Kerede Bildiniz , Tebrikler...`);
        console.log(`Puanınız = ${puan} `)
        break;
    } else if (sayi > tahmin) {
        console.log(`${hak} Hakkınız Kaldı. Yukarı `)
    } else {
        console.log(`${hak} Hakkınız Kaldı. Aşağı `)
    }

    if (hak == 0) {
        console.log('Hakkiniz Doldu...')
    }
    puan = puan - (100 / can)
}