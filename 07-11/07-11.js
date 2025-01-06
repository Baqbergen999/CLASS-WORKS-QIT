// let number = prompt('1-den 3-ke deiin tandanyz: ')
// var order = '';

// switch (number) {
//     case '1':
//         alert('Siz 1 tandadynyz');
//         order =1;
//         break;
//     case '2':
//         alert('Siz 2 tandadynyz');
//         order =2;
//         break;
//     case '3':
//         alert('Siz 3 tandadynyz');
//         order =3;
//         break;
//     default:
//         alert('1-den 3-ke deiin tandanyz');
//         order = 'Qate';
// }
// alert(order);










let et = prompt("Бургер таңдаңыз: \n A) Сиыр етімен 900тг \n B) Қой етімен 800тг \n C) Тауық етімен 700тг");
let sous = prompt("Соус таңдаңыз: \n A) Сырный соус 90тг \n B) Кетчуп 80тг \n C) BBQ 70тг");
let susyn = prompt("Сусын таңдаңыз: \n A) Кола 500тг \n B) Спрайт 400тг \n C) Фанта 300тг");
let potato = prompt("Фри таңдаңыз: \n A) Large 500тг \n B) Medium 400тг \n C) Small 200тг");
let order = "";
let money = 0;

switch (et) {
    case 'a':
        order += 'Сиыр етімен\n';
        money += 900;
        break;
    case 'b':
        order += 'қой етімен\n';
        money += 800;
        break;
    case 'c':
        order += 'Тауық етімен';
        money += 700;
        break;

}
switch (sous) {
    case 'a':
        order += 'Сырный соус\n';
        money += 90;
        break;
    case 'b':
        order += 'Кетчуп\n';
        money += 80;
        break;
    case 'c':
        order += 'BBQ\n';
        money += 70;
        break;

}
switch (susyn) {
    case 'a':
        order += 'Кола\n';
        money += 500;
        break;
    case 'b':
        order += 'Спрайт\n';
        money += 400;
        break;
    case 'c':
        order += 'Фанта\n';
        money += 300;
        break;

}
switch (potato) {
    case 'a':
        order += 'Фри Large\n';
        money += 500;
        break;
    case 'b':
        order += 'Фри Medium\n';
        money += 400;
        break;
    case 'c':
        order += 'Фри Small\n';
        money += 300;
        break;

}
alert("Сіздің заказыңыз: \n" + order + "\n" + "Итогы:" + "\n" + money + "тг")






// let num1 = parseInt(prompt("Кез келген сан енгізіңіз: "));
// let num2 = parseInt(prompt("Кез келген сан енгізіңіз: "));
// let tanba = prompt("Таңба егізіңіз: ");
// let result = 0;
// switch (tanba) {
//     case '-':
//         result = (num1 - num2);
//     break;
//     case '+':
//         result = (num1 + num2);
//     break;
//     case '*':
//         result = (num1 * num2);
//     break;
//     case '/':
//         result = (num1 / num2);
//     break;
// }
// alert(result);