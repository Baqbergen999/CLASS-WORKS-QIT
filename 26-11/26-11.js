// let list = ["Алма", "Алмұрт", "Пияз"];

// console.log(list[0]); // Индексі бойынша шақыру
// console.log(list[1]);
// console.log(list[2]);
// console.log(list[3]); // Ондай элемент жоқ, сондықтан undefinded деп шығады





// let list = ["Алма", "Алмұрт", "Пияз"];
// list[1] = "Нан";
// list[2] = "Су";

// console.log(list);




// let list = ["Apple", "Pineapple", "Ris", "Bread"];

// console.log(list[list.length - 1]); //Кері қарай санайды




// let fruits = ["Apple", "Banana", "Шие"];
// fruits[3] = "Апельсин";
// fruits[1] = "Манго";
// console.log(fruits);




// let fruits = ["Алма", "Банан", "Шие"];
// for (let i = 0; i <= fruits.length; i++) {
//     console.log(fruits[i]);
// }



// let numbers = [20, 30, 23, 45];
// for (let i = 0; i <= numbers.length; i++) {
//     console.log(numbers[i] + 5);
// }





// let numbers = [20, 30, 23, 45];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         console.log(numbers[i] + " Жұп");
//     } else if (numbers[i] % 2 != 0) {
//         console.log(numbers[i] + " Тақ");
//     }
// }




// function example() {
//     let num = [1, 2, 3];
//     num.push(4, 5, 6);
//     console.log(num); //[1, 2, 3, 4, 5, 6]
// }

// console.log(example());




// function exersice() {
//     let text = prompt("Кез келген сөз/сан жазыңыз:");
//     let matyn = [];
//     matyn.push(text);
//     console.log(matyn);
// }

// console.log(exersice());




// function exersice() {
//     let number;
//     let numbers = [];
//     while (number != 0) {
//         number = prompt("Кез келген сан енгіз:");
//         numbers.push(number);
//         if (number == 0) {
//             return numbers;
//         }
//     }
// }
// console.log(exersice());






// let numberEven = [];
// let numberOdd = [];
// while (true) {
//     let number = +prompt("Engiz:");
//     if (number == 0) {
//         break;
//     }
//     else if (number % 2 == 0) {
//         numberEven.push(number);
//     } else {
//         numberOdd.push(number);
//     }
// } 
// console.log("Жұп сандар: " + numberEven);
// console.log("Тақ сандар: " + numberOdd);






// let numbers = [];

// while (true) {
//     let number = +prompt("Engiz");
//     if (numbers[numbers.length - 1] > number) {
//         break;
//     } else {
//         numbers.push(number);
//     }
// }
// console.log(numbers);








