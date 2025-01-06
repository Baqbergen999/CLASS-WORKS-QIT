// const person = {
//     name: 'Asanali',
//     age: 28,
//     hobby: "Drawing",
// };

// const {name, age, hobby} = person; // Бөлектеп, ыдырату
// console.log(name);
// console.log(age);
// console.log(hobby);





// const numbers = [1, 2, 3, 4, 5];

// const [a, b, c, d, e] = numbers;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);





// const obj1 = { name: "Asanali", age: 21};
// const obj2 = { ...obj1, hobby: "Drawing"}; // Үш нүкте арқылы қосады

// console.log(obj2);





// const  author = {
//     name: "Mukhtar Auezov",
//     year: 1897,
// };

// const book = {
//     title: "Abai Joly",
//     pages: 300,
//     author: { ...author}, // Немесе author: {...author} емес тек author десе де болады 
// }

// console.log(book);





// const arr1 = [1, 2, 3];
// const arr2 = [4, 5];
// const arr3 = [...arr1, ...arr2];

// console.log(arr3);







// const obj1 = {
//     name: 'Name A',
//     age: 19,
//     hobbies: ["Drawing", "Login", "Swimming"],
// }
// const {hobbies, ...user } = obj1;
// console.log(hobbies);
// console.log(user);






// const [a, ...rest] = [1, 2, 3, 4];
// console.log(a);
// console.log(rest);





// const book = { title: "Абай Жолы", author: "Мұхтар Әуезов", yaer: 1942};
// const {title, author, yaer} = book;
// console.log(yaer);
// console.log(title);
// console.log(author);




// const fruits = ["Apple", "Almurt", "Shie"];
// const [apple, ...rest] = fruits;
// console.log(rest);
// console.log(apple);






// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5, 6];
// console.log(arr2);

// const user2 = {hobby: "Swimming"}
// const user1 = {...user2, name: "Ali", age: 25}

// console.log(user1);






// const person = {
//     name: "Айжан",
//     age: 25,
//     profession: "Мұғалім",
//     salem: function () {
//         return `Сәлем, менің атым ${this.name}, менің жасым ${this.age}те, және менің мамандығым ${this.profession}!`;
//     },
//     friends: [],
//     addFriends: function() {
//         while (true) {
//             let addFriend = prompt("Достарыңыздың атын енгізіңіз:");
//             if (addFriend === "stop") {
//                 break;
//             } 
//             this.friends.push(addFriend);
//         }
//     }
// }
// console.log(person.salem());
// person.addFriends()
// console.log(person.friends);








// const group = {
//     name: "8'i'",
//     students: [
//         {name: "Бека", age: 13, score: [70, 17, 100]},
//         {name: "Нурик", age: 17, score: [25, 23, 45]},
//         {name: "Баха", age: 13, score: [50, 77, 25]},
//         {name: "Муслим", age: 19, score: [67, 85, 100]},
//         {name: "Баука", age: 13, score: [89, 12, 90]},
//         {name: "Алик", age: 14, score: [90, 10, 21]},
//     ],
// };
// let result = 0;

// function findAverageScore() {
//     return group.students[0].score.reduce((total, num) => total + num, 0) / group.students[0].score.length
// }
// console.log(findAverageScore());

// function findAverageAge() {
//     return group.students.reduce((total, num) => total + num.age, 0) / group.students.length
// }
// console.log(findAverageAge());

// function find10or15() {
//     return group.students.filter((student) => student.age >= 10 && student.age <= 15);
// }
// console.log(find10or15());








const library = {
    name: "Alatau HUB",
    books: [
        { name: "Book A", pages: 300},
        { name: "Book B", pages: 100},
        { name: "Book C", pages: 900},
        { name: "Book D", pages: 1100},
    ],
}

function findAveragePages () {
    return library.books.reduce((total, num) => total + num.pages, 0) / library.books.length
};

function findLowPages() {
    return library.books.sort((a, b) => a - b);
}
console.log(findAveragePages());
console.log(findLowPages());
