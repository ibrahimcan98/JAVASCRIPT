// ** Şimdiki tarihin gün ay ve yıl bilgisini yazdırın
let dt = new Date()

console.log(dt.getMonth())
console.log(dt.getDate())
console.log(dt.getFullYear())


//** Tarih ve saat bilgisini içeren bir date objesi oluşturun 
let dtA = new Date('5/23/1998 14:50:12')
let dtB = new Date(2005, 5, 23, 12, 15, 10)
console.log(dtA)
console.log(dtB)


//** 1/1/1990 tarhinden bir gün öncesini gösteriniz.
let dtC = new Date('1/1/1990');
let dayOfMonth = dtC.getDate();
dtC.setDate(dayOfMonth - 1);
console.log(dtC)


// İki tarih arası geçen zamanı bulun
let start = new Date('6/23/1998');
let end = new Date('1/2/2022');

let ms = end - start
let sn = ms / 1000;
let dk = sn / 60
let saat = dk / 60
let gün = saat / 24
let ay = gün / 30
let yıl = ay / 12
console.log('Gün ' + gün, ' Saat ' + saat, ' Dakika ' + dk)


//  Her yıl Mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2019 yılında ne zaman kutlanacaktır.
let anne = new Date();
anne.setHours(0, 0, 0, 0);
anne.setFullYear(2019);
anne.setDate(1);
anne.setMonth(4);

while (anne.getDay() != 0) {
    anne.setDate(anne.getDate() + 1)
}

anne.setDate(anne.getDate() + 7);
console.log(anne)


// Yaş hesaplama nasıl yapılır?
let birtday = new Date('6/23/1998');
let now = new Date();

let age = now - birtday;
console.log(age)

let ageForYear = now.getFullYear() - birtday.getFullYear()
console.log(ageForYear)