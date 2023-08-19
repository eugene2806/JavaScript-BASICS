const arr = [-1, 0, 11, 2, 202, 4, 21, 6, 3, 76, 8, -12];

function sort(array) {
    const arrSort = [];
    let bufer;
    for (let i = array.length - 1; i > 0 ; i--) {
        bufer = array[i] - 1;
        for (let j = 0; j < array.length; j++) {
            if (array[i] > array[j] && array[i] > bufer) {
                bufer = array[i];
            } 
             if (array[j] > bufer) {
                bufer = array[j];
            }   
        }
        indexRemoveElement = arr.indexOf(bufer);
        arr.splice(indexRemoveElement, 1);
        arrSort.unshift(bufer);
        bufer = 0;
    }
    if (array.length === 1) {
        const lastElement = arr.splice(0, 1);
        arrSort.unshift(lastElement[0]);
    }
    return arrSort;
}
 
console.log(`Исходный массив => ${arr}`);
console.log(`Отсортированный массив => ${sort(arr).join(', ')}`);