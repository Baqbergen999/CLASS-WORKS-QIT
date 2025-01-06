// function add(a, b) {
//     return a + b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// const sum = add(3, 9);

// console.log("The result is " + multiply(add(3, 9), 5));



// function cube(num) {
//     let result = 1;

//     for (let i = 1; i <= 3; i++) {
//         result *= num;
//     }

//     return result;
// }
// let num = +prompt("San engiz:");
// let cubeResult = cube(num);

// console.log(cubeResult);




// const add = () => 5 + 6;
// console.log(add());






// let num1 = +prompt("San engiz:");
// let num2 = +prompt("San engiz:");
// let tanba = prompt("Tanba engiz:");

// const calculator = (a, b, c) => {
//     if (c == "+") {
//         return a + b;
//     } else if (c == "/") {
//         return a / b;
//     } else if (c == "-") {
//         return a - b;
//     } else if (c == "*") {
//         return a * b;
//     }
// }
// console.log(calculator(num1, num2, tanba));





// let num1 = +prompt("San engiz:");
// let num2 = +prompt("San engiz:");
// let num3 = +prompt("San engiz:");

// const ulkeni = (a, b, c) => {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else {
//         return c;
//     }
// }
// console.log(ulkeni(num1, num2, num3));





// let sm = +prompt("Uzyndyqty engiz:");

// const metr = (a, b) => {
//     return a / b;
// }
// console.log(metr(sm, 100000) + " километр");






// let money = +prompt("Enter the money:");
// let currency = prompt("tenge to dollar or dollar to tenge");

// const moneyConvert = (x, z) => {
//     if (z == "tenge to dollar") {
//         return x / 500;
//     } else if (z == "dollar to tenge") {
//         return x * 500;
//     } else {
//         return ("Qate")
//     }
// }
// console.log(moneyConvert(money, currency));




// function total() {
//     let name;
//     let qun;
//     let result = 0;
//     while (name != "stop") {
//         name = prompt("Аты:");
//         if (name == "stop") {
//             break;
//         }
//         qun = +prompt("Құны:");
//         result = result + qun;
//     } 
//     if (name == "stop") {
//         return result;
//     }
// }
// console.log(total());



// function total() {
//     let name;
//     let qun;
//     let result = 0;
//     while (true) {
//         name = prompt("Аты:");
//         if (name == "stop") {
//             break;
//         }
//         qun = +prompt("Құны:");
//         result = result + qun;
//     } 
//     if (name == "stop") {
//         return result;
//     }
// }
// console.log(total());
