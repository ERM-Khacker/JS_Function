//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.
function getMinNum(num1, num2) {
    const res = num2 - num1;
    if (isNaN(res)) {
        return null;
    }
    if (num1 > num2) {
        return [num2];
    }
    return [num1];
}

function getMaxNum(num1, num2) {
    const res = num2 - num1;
    if (isNaN(res)) {
        return null;
    }
    if (num1 > num2) {
        return [num1];
    }
    return [num2];
}

//Дан массив arr. Найдите среднее арифметическое его элементов. 
//Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
arr1 = [12, 15, 20, 25, 59, 79];
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
    return Math.ceil(Math.random() * (numBegin + numEnd) + numBegin);
}
