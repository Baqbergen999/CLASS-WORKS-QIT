// const user = {
//     name: "Aliya",
//     age: 28,
//     hobbies: [
//         {name: "Атқа міну", start: 2010},
//         {name: 'Ойындар', start: 2020},
//         {name: 'Шахмат', start: 2015},
//         {name: "Воллейбол", start: 2013},
//         {name: "Жапония", start: 2017},
//     ],
//     addHobby: function() {
//         let newHobbyName = prompt("Хобби аты:");
//         let newHobbyYear = +prompt("Хоббиіңіздің басталған жылы:");

//         this.hobbies.push({name: newHobbyName, year: newHobbyYear});
//     },
//     listOnlyShortHobbies: function() {
//         return this.hobbies.filter((hobby) => hobby.length <= 15)
//     },
//     after: function() {
//         return this.hobbies.filter((hobby) => hobby.start >= 2017)
//     }
// };
// // user.addHobby();
// console.log(user.after());


// console.log(user.hobbies);







// const users = [
//     { name: "Әлия", age: 28},
//     { name: "Бауыржан", age: 32},
//     { name: "Мәншүк", age: 24},
// ];
// bigThreety = function() {
//     return users.filter((user) => user.age >= 30);
// }
// sort = function() {
//     return users.sort((a, b) => a.age - b.age);
// }
// console.log(bigThreety());
// console.log(sort());






// const team = {
//     name: "Coders",
//     members: [
//         { name: "Асқар", skill: [ "Javascript", "Python" ] },
//         { name: "Айжан", skill: [ "HTML", "CSS" ] },
//         { name: "Айбек", skill: [ "PHP", "Rust" ] },
//         { name: "Ақнұр", skill: [ "C++", "Go" ] },
//         { name: "Аңсар", skill: [ "Dart", "TypeScript" ] },
//     ]
// };

// function joinAllSkills() {
//     return team.members.flatMap((member) => member.skill);
// }
// console.log(joinAllSkills());

// console.log(team.members[3].skill[1]); //Белгілі бір елементті шығару






const AmjiltGroup = {
    name: "Group24/5",
    members: [
        {name: "Бақберген", subject: ["Д/Ш", "Информатика"], age: 13},
        {name: "Алихан", subject: ["Д/Ш", "Информатика"], age: 15},
        {name: "Айғаным", subject: ["Д/Ш", "Ағылшын тілі"], age: 14},
        {name: "Айя", subject: ["Тарих", "Химия"], age: 18},
        {name: "Ұлдана", subject: ["Информатика", "Биология"], age: 16},
        {name: "Қайсар", subject: ["Физика", "Математика"], age: 13},
        {name: "Бекарыс", subject: ["Ағылшын тілі", "Математика"], age: 15},
        {name: "Ислам", subject: ["Физика", "Д/Ш"], age: 13},
        {name: "Нұрислам", subject: ["ДШ", "Еңбек"], age: 13},
        {name: "Асылбек", subject: ["Информатика", "Д/Ш"], age: 13},
        {name: "Мұхамедали", subject: ["Математика", "Д/Ш"], age: 22},
    ],
}

console.log(AmjiltGroup.members.flatMap((member) => member.subject));
console.log(AmjiltGroup.members.filter((member) => member.age >= 13 && member.age <= 16));
console.log(AmjiltGroup.members.filter((member) => member.subject.includes("Д/Ш")).length);
