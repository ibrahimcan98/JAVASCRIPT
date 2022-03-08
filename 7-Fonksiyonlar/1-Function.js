//Functions

function yasHesapla(dogumYili) {
    return 2022 - dogumYili
}

yasHesapla(1983)


let val = yasHesapla(1983)
let ageTuba = yasHesapla(1998)
let ageNilufer = yasHesapla(1962)

console.log(val)
console.log(`Nilüfer Yas ${ ageNilufer }`)
console.log(ageTuba)


function Emeklilik(dogumYili, isim) {
    let yas = yasHesapla(dogumYili)

    let emeklilik = 65 - yas


    if (emeklilik > 0) {
        console.log(`${isim} Emekli olmanıza ${emeklilik} yıl kaldı`)
    } else {
        console.log(`${isim} Zaten Emekli Oldunuz`)
    }
}

Emeklilik(1998, 'İbrahim')
Emeklilik(1962, 'Nilüfer')
Emeklilik(1957, 'Esma')