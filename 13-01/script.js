// setTimeout(() => {
//     console.log("2 секунд өтті!");
// }, 2000);



// let count = 0;
// const interval = setInterval(() => {
//     count++;
//     console.log(`Санау: ${count}`);
//     if (count === 5) {
//         clearInterval(interval);
//     }
// }, 1000);




// function fetchData() {
//     console.log("Деректерді алу басталды...");
//     setTimeout(() => {
//         console.log("Деректер сәтті аяқталды!");
//     }, 2000)
// }
// fetchData();





// const users = [
//     {id: 1, name: "Алихан", age: 25},
//     {id: 2, name: "Айгерім", age: 30},
//     {id: 3, name: "Медет", age: 22},
// ];
// setTimeout(() => {
//     console.log(users[0]);
// }, 1000);
// setTimeout(() => {
//     console.log(users[1]);
// }, 2000);
// setTimeout(() => {
//     console.log(users[2]);
// }, 3000);





// const number = document.getElementById('number');

// let count = 5;
// const interval = setInterval(() => {
//     count--;
//     number.textContent = count;
//     if (count === 0) {
//         clearInterval(interval);
//         number.textContent = "Уақыт аяқталды";
//     }
// }, 1000);






// const text = "бұл мәтін бір әріптен бастап шығады сосын жеке жеке 100 мили секунд сайын қосылады";
// const texted = document.getElementById('text');
// let length = 0;

// function typeText() {
//     if(length < text.length){
//         texted.textContent += text[length]; 
//         length++;
//         setTimeout(typeText, 90);
//     }
// }
// typeText();






