const arr = [-1, 0, 11, 2, 202, 4, 21, 6, 3, 76, 8, -12, 22, 13, 47];

function sortArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(`Исходный массив => ${arr}`);
console.log(`Отсортированный массив => ${sortArray(arr).join(', ')}`);