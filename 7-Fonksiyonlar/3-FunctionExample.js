//Demo Functions


let hesapA = {
    ad: ' Tuba Kodak ',
    hesapNo: '12345678',
    bakiye: 2000,
    ekHesap: 1000
}

let hesapB = {
    ad: ' Umutcan Eroğlu ',
    hesapNo: '12345679',
    bakiye: 500,
    ekHesap: 500
}

function paraCek(hesap, miktar) {

    console.log(`Merhaba ${hesap.ad}`);

    if (hesap.bakiye >= miktar) {
        hesap.bakiye = hesap.bakiye - miktar;
        console.log('Paranızı alabilirsiniz!')
    } else {
        let toplam = hesap.bakiye + hesap.ekHesap;

        if (toplam >= miktar) {
            if (confirm('Ek hesabınızı kullanmak istermisiniz ?')) {
                console.log('Paranızı alabilirsiniz!')
                var bakiye = hesap.bakiye;
                var ekhesap = miktar - bakiye;
                hesap.bakiye = 0
                hesap.ekhesap = hesap.ekhesap - ekhesap

            } else {
                console.log(`${hesap.hesapNo} nolu ana hesabınızda ${miktar} TL bulunmaktadır.`)
            }
        } else {
            console.log('Üzgünüz Bakiye YETERSİZ')
        }
    }
}

paraCek(hesapB, 1000)
paraCek(hesapB, 2000)