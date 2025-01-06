const fillArray = (arr) => {
    while (true) {
        let thing = prompt("Engiz:");
        if (thing === "stop") break;
        if (isNaN(Number(thing))) {
            arr.push(thing);
        } else {
            arr.push(Number(thing));
        }
    }
    return arr;
}




// let array = fillArray([]);

// let number = +prompt("Баға енгіз:");

// function price(array, price) {
//     return array.filter((tauar) => tauar < price);
// }

// console.log(`Тауарлар: ${price(array, number)}`);
// console.log(`Тауарлар саны: ${price(array, number).length}`);








let array = fillArray([]);
function price() {
    return array.filter((bagalar) => bagalar < 150000 && bagalar > 100000);
}
console.log("Товар бағалары: " + price());
console.log("Товар саны: " + price().length);
