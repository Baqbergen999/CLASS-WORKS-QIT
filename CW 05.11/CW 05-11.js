// var websiteName = "Facebook"

// alert("Welcome to my Website" + websiteName + "\n" + "Here is description of my website"); // "\n"- келесі жол

// let name = prompt("Enter your name:");

// alert("Hello " + name + "!");




// let name = prompt("Enter your name:");
// let age = prompt("Enter your age: ");
// let salary = prompt("Enter your salary: ")

// if ((age >= 18 && age <= 75) && salary > 70000) {
//     alert(name + ", Кредит не оформлен!");
// }
// else {
//     alert(name + ", Кредит оформлен!");
// }




// let num = prompt("Enter any number")

// if (num % 2 == 0) {
//     alert("Number " + num + " is Jup number")
// }
// else {
//     alert("Number " + num + " is Taq number")
// }




// let birthYear = prompt("Enter year of your birthday: ")

// alert(2024 - birthYear);




// var birthYear = Number(prompt("Enter your year of birth: "));
// var age = 2024 - birthYear;
// //NOt a number

// if (isNaN(birthYear)){
//     alert("Durys san engiz")
// }
// else {
//     alert(age)
// }




// let num1 = Number(prompt("Enter your first number"));
// let num2 = Number(prompt("Enter your second number"));


// alert(num1 + num2);




// var password = prompt("Enter your password:");
// var confirmPassword = prompt("Enter the password:");

// if (confirmPassword == password){
//     alert("Its true password")
// }
// else {
//     alert("Its false password")
// }



// let score = 0;
// let quesstion1 = prompt("Пабг ойыны қай жылы шықты?");
// if (quesstion1 == 2016 || quesstion1 == "2016жылы") {
//     alert("Дұрыс")
//     score++;
// }
// else {
//     alert("Қате")
// }
// let quesstion2 = prompt("Пабг ойыны қандай жанрда?");
// if (quesstion2 == "Шутер" || quesstion2 == "Шутер мобайл") {
//     alert("Дұрыс")
//     score++;
// }
// else {
//     alert("Қате")
// }
// let quesstion3 = prompt("Пабг ойыны қанша коллаб жасады?");
// if (quesstion3 == "25+" || quesstion3 == "25") {
//     alert("Дұрыс")
//     score++;
// }
// else {
//     alert("Қате")
// }
// let quesstion4 = prompt("Пабг ойынында қанша адам ойнайды?");
// if (quesstion4 == "566118") {
//     alert("Дұрыс")
//     score++;
// }
// else {
//     alert("Қате")
// }
// let quesstion5 = prompt("Пабг ойынының разработчигі кім?");
// if (quesstion5 == "Брендан Грин") {
//     alert("Дұрыс")
//     score++;
// }
// else {
//     alert("Қате")
// }

// alert("Сіз " + score + " Ұпай жинадыңыз");

// if (score <= 3) {
//     alert("Тағы да қайталап көр")
// }
// else if (score > 3){
//     alert("Жарайсың")
// }






let time = prompt("Қазір сағат неше?");

if (time >= 5 && time <= 12) {
    alert("Қайырлы таң!")
}
else if (time > 12 && time <= 17) {
    alert("Қайырлы күн!")
}
else if (time > 17 && time <= 21) {
    alert("Қайырлы кеш!")
}
else if (time > 21 && time <= 1) {
    alert("Қайырлы түн!")
}