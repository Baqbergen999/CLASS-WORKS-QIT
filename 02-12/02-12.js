// let array = [3, 5, 9, -5, 15, 23];

// function menu() {
//     while (true) {
//         let text = +prompt(`Welcome to my menu! \n${array}\n
//             1) Сандар қосындысы\n
//             2) Арифметикалық ортасы\n
//             3) Белгілі бір диапазондағы сандар\n
//             4) Тек оң сандар\n
//             5) Шығып кету`)
//         switch (text) {
//             case 1:
//                 sumOfNumbers();
//                 break;
//             case 2:
//                 avarage();
//                 break;
//             case 3:
//                 diapazon();
//                 break;
//             case 4:
//                 plusNumbers();
//                 break;
//             case 5:
//                 return;
//         }
//     }
// }


// function sumOfNumbers() {
//     alert(array.reduce((total, num) => total + num, 0));
// }
// function avarage() {
//     alert((array.reduce((total, num) => total + num, 0)) / array.length);
// }
// function diapazon() {
//     let num1 = +prompt("Бірінші санды енгізіңіз:");
//     let num2 = +prompt("Екінші санды енгізіңіз:");
//     alert(array.filter((num) => num > num1 && num < num2));
// }
// function plusNumbers() {
//     alert(array.filter(num => num > 0));
// }

// alert(menu());






// const student = {
//     name: "Asan",
//     surname: "Abai",
//     age: 20,
//     course: "Coding",
//     address: "Uly dala 78",
//     phone: "77072652485"
// };
// console.log(student);

// student.age++;

// console.log((`Менің атым ${student.name} ${student.surname}, мен ${student.age} жастамын,
//     қазіргі уақытта ${student.course} курсында білім алып жатырмын`));




// const calculator = {
//     add: function(a, b) {
//         return a + b;
//     },
//     minus: function(a, b) {
//         return a - b;
//     },
//     multiplacation: function(a, b) {
//         return a * b;
//     }
// };

// console.log(calculator.add(4, 10));
// console.log(calculator.minus(80, 5));
// console.log(calculator.multiplacation(4, 7));





// const product = {
//     imageURL: "image",
//     name: "AirPods 4",
//     raiting: 4.8,
//     price: 85990,
//     percent: 19,
//     discount: function() {
//         return this.price - (this.price * this.percent) / 100;
//     }
// }
// console.log(product.discount());






// const worker = {
//     name: "Aithan",
//     surname: "Asaubekova",
//     age: "34",
//     phone: "87079673546",
//     description: function() {
//         return `Hello, my name is ${this.name} ${this.surname}
//         I am ${this.age} yars old
//         My number is ${this.phone}`
//     }
// }
// console.log(worker.description());




const myRestrant = {
    menuItems: ['Pizza', 'Sushi', 'Cola'],
    displayMenu: function() {
        return this.menuItems.join('\n');
    }
}

console.log(myRestrant.displayMenu());
