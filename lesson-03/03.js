// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    let max = a; // Предположим, что a — наибольшее

    if (b > max) { // Если b больше max, обновляем max
        max = b;
    }

    if (c > max) { // Если c больше max, обновляем max
        max = c;
    }

    return max; // Возвращаем наибольшее значение
}

console.log(findLargest(4, 5, 6)); //  6
console.log(findLargest(5, 6, 7)); //  7
console.log(findLargest(6, 7, 8)); //  8