const firstName = 'Tuba'
const age = '23'
const isStudent = 'true'
const school = 'high school'

if (firstName === 'Tuba') {
    console.log('Hoşgeldin ' +
        firstName)
}

if (age === '23') {
    console.log('Yaşınız ' + age)
}

if (isStudent) {
    console.log('Merhaba Öğrenci')
} else {
    console.log('Merhaba , İşler nasıl gidiyor ?')
}

// ###########################################
if (age >= 18) {
    if ((school == 'master of degree') || (school == 'high school')) {
        console.log('Ehliyet alabilirsiniz')

    } else {
        console.log('Eğitim durumunuz yeterli değil!')
    }

} else {
    console.log('Ehliyet Alamazsınız')
}

// ###########################################

if (age > 0 && age < 12) {
    console.log(`${firstName} is a child`)
} else if (age >= 13 && age <= 19) {
    console.log(`${firstName} is a teenager`)
} else {
    console.log(`${firstName} is an adult`)
}


//undifined###########################################

if (typeof id !== 'undefined') {
    console.log('id =' + id)
} else { console.log('no id') }