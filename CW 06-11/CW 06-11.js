// let a = 5;
// let b = 7;
// let temp = 0;

// temp = a;
// a = b;
// b = temp;

// alert("A: " + a + "\n" + "B: " + b);




// var isRain = prompt("Жаңбыр жауып жатырма?");

// if (isRain == "Иә" || isRain == "иә") {
//     alert("Автобуспен бар");

//     var isMorning = prompt("Қазір таңба?");

//     if (isMorning == "Иә") {
//         alert("Велосипедпен бар");

//     }
//     else if (isMorning == "Жоқ") {
//         alert("Машинамен бар");
//     }
// }





// let profestion = prompt("Қандай мамандық болғың келеді?");
// if (profestion == "дәрігер" || profestion == "Дәрігер" || profestion == "Стоматолог" || profestion == "стоматолог") {
//     alert("Биохимия таңда")
// }
// else if (profestion=="Программист" || profestion=="программист" || profestion=="айтишник" || profestion=="Айтишник") {
//     alert("Физмат таңда")
// }
// else if (profestion=="Бугхалтер" || profestion=="бугхалтер") {
//     alert("Математика таңда")
// }
// else {
//     alert("Мамандық қате енгізілді")
// }


let order = "";

let name = prompt("Есіміңізді жазыңыз:")


let burger = prompt("Қанша бургер таңдайсыз: \n A) 1 \n B) 2 \n C) 3");
let sous = prompt("Қандай соус таңдайсыз: \n A) Сырмен \n B) Кетчуп \n C) BBQ ");
let susyn = prompt("Қандай сусын таңдайсыз: \n A) Cola \n B) Fanta \n C) Sprite ");
let legs = prompt("Қандай тауық таңдайсыз: \n A) Тауық аяқтары \n B) Тауық қанаттары \n C) Нагетсы ");

if (burger == "a") {
    order += "1-бургер \n"
} else if (burger == "b") {
    order += "2-бургер \n"
} else if (burger == "c") {
    order += "3-бургер \n"
}



if (sous== "a") {
    order += "Сырмен \n"
}else if (sous=="b") {
    order += "Кетчуп \n"
}else if (sous== "c") {
    order += "BBQ \n"
}


if (susyn=="a") {
    order += "Cola \n"
}else if (susyn=="b") {
    order += "Fanta \n"
}else if (susyn=="c") {
    order += "Sprite \n"
}


if (legs == "a") {
    order += "Тауық аяқтары \n"
}else if (legs == "b") {
    order += "Тауық қанаттары \n"
}else if (legs == "c") {
    order += "Нагетсы \n"
}


alert(order + '\n' + name)
