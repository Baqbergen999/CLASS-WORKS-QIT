// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }




// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " Жұп");
        
//     }
//     else {
//         console.log(i + " Тақ");
//     }
// }




// for (let i = 1; i < 5; i++) {
//     // console.log(i);
//     if (i == 3) {
//         break;
//     }
// }




// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
    
// }




// for (let i = 10; i >= 1; i--) {
//     console.log(i);
    
// }



// let num = prompt("Сан енгіз:")
// for (let i = 0; i < num; i++) {
//     console.log(i);
// }



// let num = Number(prompt("Enter number:"));
// let result = 0;

// for (let i = 1; i <= num; i++) {
//     result += i;
// }
// console.log(result);





// let num = Number(prompt("Сан енгізіңіз:"));
// let result = 0;

// for (let i = 2; i <= 9; i++) {
//     result = i * num;
//     console.log(num + " x " + i + " = " + result);
// }





// let surak = prompt("Тесланы кім ойлап тапты?");

// for (let i = 1; i <= 3; i++) {
//     if (surak=="Илон Маск") {
//         alert("Дұрыс")
//         break;
//     }
//     else {
//        surak =  prompt("Тесланы кім ойлап тапты?");
//     }
// } 



// for (let i = 100; i >= 0; i -= 2) {
//     console.log(i);
    
// }




for (let i = 100; i >= 0; i -= 2) {
    if (i % 4 == 0) 
        continue;
    console.log(i);

}