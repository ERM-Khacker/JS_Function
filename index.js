//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
function getMinNum() {
    if (isNaN(arguments[0])) {
        return null;
    }
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

function getMaxNum() {
    if (isNaN(arguments[0])) {
        return null;
    }
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }
    return max;
}

function getMinAndMaxNumbers() {
    if (isNaN(arguments[0])) {
        return null;
    }
    return [getMinNum(...arguments), getMaxNum(...arguments)]
}

//Дан массив arr. Найдите среднее арифметическое его элементов. 
//Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
const arr1 = [12, 15, 20, 25, 59, 79];
function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;;
}
const myArr = getAverage(arr1);
console.log(myArr);

//Выведите на экран случайное целое число от 1 до 100.
function getRandom(numBegin, numEnd) {
    return Math.ceil(Math.random() * (numEnd - numBegin) + numBegin);
}
console.log(getRandom(1, 100));

//Заполните массив 10-ю случайными целыми числами.
const myArray = [];
let numberLength = 10;
for (let i = 0; i < numberLength; i++) {
    myArray.push(Math.round(Math.random() * numberLength));
}
console.log(myArray);
