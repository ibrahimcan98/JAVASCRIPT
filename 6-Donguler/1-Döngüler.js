// LOOPS

// FOR LOOP


for (let i = 0; i < 10; i++) {

    if (i == 3) {
        console.log(`en sevdiğim rakam : ` + i);
        continue;
    }

    if (i == 6) {
        console.log(`en sevmediğim rakam : ` + i);
        continue;
    }
    console.log(i);
}


//WHILE LOOP

for (let i = 0; i < 10; i++) {
    console.log(i)
}

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}


//DO-WHILE LOOP

let i = 0
do {
    console.log(i);
    i++;
} while (i < 10);


let sonuc = 1;
for (let i = 10; i > 0; i--) {
    if (i % 2 == 0) {

        sonuc *= i;
    }

}
console.log(sonuc);

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i : ${i}, j : ${j}`)
    }
}