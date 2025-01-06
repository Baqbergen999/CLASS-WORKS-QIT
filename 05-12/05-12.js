// const students = [
//     {name: "Али", age: 22, score: 80,},
//     {name: "Ертай", age: 25, score: 100,},
//     {name: "Әлімжан", age: 15, score: 30,},
//     {name: "Қошқарбай", age: 17, score: 45,},
//     {name: "Еркін", age: 14, score: 57,},
// ];
// function studentsName() {
//     return students.forEach(function(student) {
//         console.log(student.name);
//     });
// }
// studentsName();



// function big20() {
//     return students.filter((student) => student.age >= 20);
// }

// console.log(big20());



// function prossent10() {
//     return students.map((student) => student.score + (student.score * 10) / 100);
// }
// console.log(prossent10());



// function resultScore() {
//     return students.reduce((total, student) => total + student.score , 0)
// }

// console.log(resultScore());


// function findTheBest() {
//     return students.sort((a, b) => b.score - a.score)
// }
// console.log(findTheBest()[0]);








// const things = [
//     {name: "Күріш", baga: 500,},
//     {name: "Нутелла", baga: 5500,},
//     {name: "Ұн", baga: 8500,},
//     {name: "Дубайский Шокалад", baga: 15000,},
//     {name: "Сникерс", baga: 300,},
// ];
// console.log(things);

// function big1000() {
//     return things.filter((thing) => thing.baga >= 1000)
// }
// console.log(big1000());

// function moneyAllThings() {
//     return things.reduce((total, thing) => total + thing.baga, 0)
// }
// console.log(moneyAllThings());


// function names() {
//     return things.flatMap((thing) => thing.name)
// }
// console.log(names());

// function action() {
//     return things.filter((thing) => thing.baga > 10000);
// }

// function action2() {
//     return action().map((thing) => thing.baga - (thing.baga * 15) / 100)
// }
// console.log(action2());







let students = [];
while (true) {
    let menu = prompt(`Бағдарламаға қош келдіңіз! \n 1) Студент қосу \n 2) Студентті іздеу \n 3) Орташа ұпайды есептеу \n 4) Ең жоғарғы жіне ең төменгі ұпайды көру \n 5) Ұпайларды сұрыптау \n 6) Шығып кету`);
    if (menu === "6") {
        alert("Бағдарлама аяқталды!");
        break;
    }
    else if (menu === "1") {
        let addStudent = prompt("Студенттің есімі:");
        let addAge = prompt("Студенттің жасы:");
        let addBaga = prompt("Туденттің бағасы:");
        students.push({name: addStudent, age: addAge, score: addBaga});
    }
    else if (menu === "2") {
        let search = prompt("Студенттің атын енгізіңіз:")
        let resultOfSearch = students.filter((student) => student.name === search);
        console.log(resultOfSearch);
        
        if (resultOfSearch.length === 0) {
            alert("Студент табылмады")
        } else {
            alert(`Студен табылды! ${resultOfSearch[0].name} ${resultOfSearch[0].age} ${resultOfSearch[0].score}`)
        }
    }
}
