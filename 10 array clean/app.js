const arr = [1, 2, 3, 4, 12, 5, 6, 7, 8, 9, 10, 11, 12, 1];

function filterOfNumbers(el) {
    return el < 10;
}

function removeNumbersOfArray(array, fn) {
    const newArray = [];
    for (let element of array) {
        const res = fn(element);
        if (!res) {
            newArray.push(element);
        }
    }
    return newArray;
}

const newArray = removeNumbersOfArray(arr, filterOfNumbers);
console.log(newArray.join(', '));