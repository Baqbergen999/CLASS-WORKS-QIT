// for (let i = 1; i <= 30; i++) {
//     if (i >= 15 && i <= 25 && i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }





// let count = 0;

// while (cont < 5) {   // "while"- Дейін
//     console.log(count);
//     count++;
// }



// do { // "do"- Орында
//     console.log(count);
//     count++;
// } while (count < 5);






// let num = 0;
// while (num < 10) {
//     if (num === 5) {
//         console.log("Цикл тоқтатылды, сан табылды:", num);
//         break; //Цикл осы жерден тоқтайды
//     }
//     console.log(num);
//     num++
// }






// let count = 0;

// while (count < 15) {
//     count++;

//     if (count % 2 == 0) {
//         continue
//     }
//     console.log(count);
// }






// let num = 1;
// while (num <= 10) {
//     if (num % 2 == 0) {
//         console.log(num + "-Жұп сан");
        
//     }
//     else{
//         console.log(num + "-Тақ сан");
        
//     }
//     num++
// }






// let num = 1;
// while (num <= 15) {
//     if (num % 3 == 0 && num % 5 == 0 ) {
//         console.log(" FizzBuzz");
        
//     }
//     else if (num % 3 == 0) {
//         console.log(num + " Fizz");
        
//     }
//     else if (num % 5 == 0) {
//         console.log(num + " Buzz");
        
//     }
//     else if (num % 3 == 0) {
//         console.log(num);
        
//     }
//     num++
// }






// let num = 1;
// let taq = 0;
// let zhup = 0;

// while (num <= 10) {
//     if (num % 2 == 0) {
//         taq += num;
//     } else {
//         zhup += num;
//     }
//     num++;
// }
// console.log(taq + " - Тақ сандардың қосылысы");
// console.log(zhup + " - Жұп сандардың қосылысы");





// let onsan;

// do {
//     onsan = Number(prompt("Оң сан енгізуіңізді сұраймыз:"));
// } while (onsan <= 0);





let num = 18;
let suraq;
let suraq2;
let suraq3;

do {
    suraq = prompt("АҚШ президенті кім?");
    num--;
} while (suraq != "Трамп");

do {
    suraq2 = prompt("Тесланы кім ойлап тапты?");
    num--;
} while (suraq2 != "Илон Маск");

do {
    suraq3 = prompt("Қазақ хандығы қашан құрылды?");
    num--;
} while (suraq3 != "1465");

alert("Cіз " + num + " ұпай жинадыңыз!");

