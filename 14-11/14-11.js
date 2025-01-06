// let taq = 0;
// let zhup = 0;
// let start = Number(prompt("Басталатың сан:"));
// let end = Number(prompt("Аяқталатын сан:"));

// for (let i = start; i <= end; i++) {
//     if (i % 2 == 0) {
//         taq += i;
//     }
//     else {
//         zhup += i;
//     }
// }

// console.log(`Тақ сандардың қосындысы ${taq}`);
// console.log(`Жұп сандардың қосындысы ${zhup}`);






// let taq = 0;
// let zhup = 0;
// let start = Number(prompt("Басталатың сан:"));
// let end = Number(prompt("Аяқталатын сан:"));
// let minNum;
// let maxNum;

// if (start > end) {
//     maxNum = start;
//     minNum = end;
// } else {
//     minNum = start;
//     maxNum = end;
// }

// for (let i = minNum; i <= maxNum; i++) {
//     if (i % 2 == 0) {
//         taq += i;
//     }
//     else {
//         zhup += i;
//     }
// }

// console.log(`Тақ сандардың қосындысы ${taq}`);
// console.log(`Жұп сандардың қосындысы ${zhup}`);





// for (let i = 3; i <= 30; i+=3) {
//     console.log(i);
// }




// for (let i = 50; i >= 0; i-=5) {
//     console.log(i);
    
// }





// for (let i = 50; i >= 0; i--) {
//     if (i % 5 == 0) {
//         console.log(i);
//     } else {
//         continue;
//     }
// }





// for (i = 1; i <= 15; i++) {
//     if (i % 4 == 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }



// let num = 1;
// let end = +prompt("Оқушы саны:");
// let result = 0;
 
// while (num <= end) {
//     let baga = +prompt(`#${num} баға енгіз:`);

//     while (baga < 0 || baga > 100) {
//         baga = +prompt(`#${num} баға үшін дұрыс балл енгіз`)
//     }

//     result += baga;
//     num++
// }
// alert(result/end);





for (i = 1; i <= 30; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(i + " FizzBuzz");
        
        break;
    } else if (i % 3 == 0) {
        console.log(i + " Fizz");
    } else if (i % 5 == 0) {
        console.log(i + " Buzz");
    } else {
        console.log(i);
    }
}
