//Date Object

let d = new Date();
//####################   Yıl,Ay,Gün,Saat,dk,sn
let birtday = new Date(1998, 5, 23, 23, 15, 31)



//Set Methods (Değiştirir)
d.setDate(23);
d.setFullYear(2023);
d.setMonth(5);
d.setHours(23)
d.setMinutes(31);
d.setSeconds(22)

//Get Method (Gösterir)
console.log("Gün", d.getDate())
console.log("Hafta", d.getDay()) // 0. Gün Pazar
console.log("Yıl", d.getFullYear())
console.log("Ay", d.getMonth()) // Ocak ayı 0. Ay
console.log("Saat", d.getHours())
console.log("Dakika", d.getMinutes())
console.log("Saniye", d.getSeconds())


console.log("Doğum günüm", birtday)
console.log("Yaş", d.getFullYear() - birtday.getFullYear())
console.log(d)
console.log(typeof d)