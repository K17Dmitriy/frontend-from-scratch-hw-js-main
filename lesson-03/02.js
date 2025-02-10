// Разработайте функцию isEven, которая определяет, чётное ли число.
// Функция должна возвращать true, если число чётное, и false — в противном случае

// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4)); //  true
console.log(isEven(5)); //  false
console.log(isEven(6)); //  true

