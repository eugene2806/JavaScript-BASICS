const arr = [1, 2, 3, 4, 12, 5, 6, 7, 8, 9, 10, 11, 12, 1];

function filterOfNumbers(el) {
    if(el < 10) {
        return true;
    } else {
        return false;
    }
}

function removeNumbersOfArray(array, fn) {
    const newArray = [];
    for (let index in array) {
        const res = fn(array[index]);
        if (!res) {
            newArray.push(array[index]);
        }
    }
    return newArray;
}

const newArray = removeNumbersOfArray(arr, filterOfNumbers);
console.log(newArray.join(', '));