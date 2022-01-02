let sentence = "    Template Literals or template strings is the ability Have multi-line strings without any funny business.    "

let url = "http://sadikturan.com/Modern Javascipt KURSU sıfırdan ileri seviye"



//Cümle kaç karakterlidir
console.log(sentence.length)

//kaç kelimeden oluşuyor
console.log(sentence.trim().split(' '))

//tüm cümleyi küçük harfe çevirin
console.log(sentence.toLowerCase())

//cümlenin başındaki ve sonundaki boşluklaır siliniz.
console.log(sentence.trim())

//'-' karakterini silin
console.log(sentence.replace('-'), (' '))

//url'nin içinde str kısmını çıkarınız
let str = 'http://'
console.log(url.substr(str.length))
console.log(url.slice(str.length))


//url hangi protocol'u kullanmaktadır ? (http , https)
//Kullanıp kullanmadığımızı bulamk için
console.log(url.startsWith('https'));
console.log(url.startsWith('http'));

//url, '.com' ifadesi içeriyor mu?
console.log(url.indexOf('.com'));
console.log(url.includes('.com'))

//url string ifasini geçerli bir url olarak düzenleyin
let val = url
val = val.toLowerCase()
val = val.replace(/ /g, '-') // Tüm hepsini seçer
val = val.replace(/ı/g, 'i')
console.log(val)