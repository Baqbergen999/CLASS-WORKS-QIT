const findMax = () => {
    let name;
    let baga;
    let max = 0;
    let maxStudent = "";
    while (name != "Stop") {
        name = prompt("Оқушының есімі:");
        if (name == "Stop") {
            break;
        }
        baga = +prompt("Баллы:");
        if (baga > max) {
            max = baga;
            maxStudent = name;
        }
    }
    return max + maxStudent;
}
alert(findMax());
alert("Орташа балл: " )

// const factorial = () => {
//     let num = +prompt("Сан енгізіңіз:");
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }
// alert(factorial());

// const findNormal = () => {
//     let num;
//     let start = 1;
//     let result = 0;
//     while (start <= 5) {
//         num = +prompt("Enter num:");
//         start++;
//         result += num;
//     }
//     return result / 5;
// }
// alert("Орташа сан: " + findNormal());




// const findNum = () => {
//     let num = 50;
//     let surak;
//     while (surak != num) {
//         surak = +prompt("Enter number:");
//         if (surak == 24) {
//             break;
//         } else if (surak >= 45 && surak <= 55 && surak != 50) {
//             alert("Санға жақынсыз:");
//         }
//     }
//     return "Сіз санды таптыңыз!";
// }
// alert(findNum());




