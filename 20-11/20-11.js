// const kosu = (a, b) => a + b;
// console.log(kosu);

// const findLength = (text) => text.Length;
// console.log(findLength("Hello world!"));

// const  compareScores = (score1, score2) => {
//     if (score1 > score2) {
//         return "Бірінші студентте жоғары баға"
//     } else {
//         return "Екінші студентте жоғары баға"
//     }
// }
// console.log(compareScores(85, 90));




// const findBig = () => {
//   let num1 = +prompt("сан енгізіңіз:");
//   let valuta1 = prompt("Валюта енгізіңіз:");
//   let num2 = +prompt("сан енгізіңіз:");
//   let valuta2 = prompt("Валюта енгізіңіз:");
//   let result = 0;
//   let result2 = 0;

//   if (valuta1 == "USD") {
//     result = num1 * 0.95;
//   } else if (valuta1 == "EUR") {
//     result = num1;
//   }
  
//   if (valuta2 == "USD") {
//     result2 = num2 * 0.95;
//   } else if (valuta2 == "EUR") {
//     result2 = num2;
//   }
//   if (result > result2) {
//     return num1;
//   } else {
//     return num2;
//   }
// };

// alert(findBig());







const findResult = () => {
    let money;
    let valuta;
    let result = 0;
    while (money != 0) {
        money = +prompt("Ақшаның санын егізіңіз:");
        if (money == "0") {
            break;
        }
        valuta = prompt("Валютаны енгізіңіз:");
        
        if (valuta == "USD") {
            result += money * 0.95;
        }
        if (valuta == "KZT") {
            result += money * 0.002;
        }
        if (valuta == "EUR") {
            result += money * 1;
        }
    }
    return result;
}

alert(findResult());
