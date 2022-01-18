// //UYGULAMA

// //20.04.2017 tarihinde trafiğe çıkan bir aracın servis bakım süreleri aşağıda verilmiştir .Bu bilgilere göre servis uyarısı veriniz

// //*1. Bakım : 1yıl , 2.Bakım:2yıl, 3. Bakım:3yıl

// let trafigeCikis = new Date('4/20/2019')
// trafigeCikis.setHours(0, 0, 0, 0);
// let trafiktekiMs = new Date() - trafigeCikis

// let trafiktekiGun = Math.round(trafiktekiMs / (1000 * 60 * 60 * 24))

// console.log(trafiktekiGun)

// if (trafiktekiGun <= 365) {
//     console.log('1. Servis bakım süreniz geldi')
// } else if (trafiktekiGun > 365 && trafiktekiGun <= 365 * 2) {
//     console.log('2. Servis bakım süreniz geldi')
// } else if (trafiktekiGun > 365 * 2 && trafiktekiGun <= 365 * 3) {
//     console.log('3. Servis bakım süreniz geldi')
// } else {
//     console.log('Bilinmeyen bir süre')
// }


//2. ÖRNEK

let result = prompt("who's there?") // prompt yukardan pencere indirir

if (result == 'cancel') {
    console.log('Kullanici çıkış yaptı')
} else if (result == 'admin') {
    let result2 = prompt('Password')

    if (result2 == 'cancel') {
        console.log('Kullanici çıkış yaptı')
    } else if (result2 == 'other') {
        console.log('Yanlış Şifre')
    } else if (result2 == 'themaster') {
        console.log('Welcome!')
    }
} else {
    console.log('Kim olduğunu bilmiyorum')
}