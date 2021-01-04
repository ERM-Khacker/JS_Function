//1.Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr3);

//2.Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
const arr4 = [1, 2, 3];
console.log(arr4);
console.log(arr4.reverse());

//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
const arr5 = [1, 2, 3];
arr5.push(4);
arr5.push(5);
arr5.push(6);
console.log(arr5);

//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
const arr6 = [1, 2, 3];
arr6.unshift(4);
arr6.unshift(5);
arr6.unshift(6);
console.log(arr6);

//5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.
//6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
const arr7 = ['js', 'css', 'jq'];
console.log(arr7[0]);
arr7.shift();
console.log(arr7);

console.log(arr7[1])
arr7.pop();
console.log(arr7[0]);

//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
const arr8 = [1, 2, 3, 4, 5];
const arrSlice = arr8.slice(0, 3);
console.log(arrSlice);

//8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
const arr9 = [1, 2, 3, 4, 5];
const newSlice = arr9.slice(3);
console.log(newSlice);

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
const myArr1 = [1, 2, 3, 4, 5];
myArr1.splice(1, 2);
console.log(myArr1);

//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const myArr2 = [1, 2, 3, 4, 5];
const myNewArr2 = myArr2.splice(1, 3);
console.log(myNewArr2);

//11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const myArr3 = [1, 2, 3, 4, 5];
myArr3.splice(3, 0, "a", "b", "c");
console.log(myArr3);

//12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const myArr4 = [1, 2, 3, 4, 5];
myArr4.splice(1, 0, 'a', 'b');
myArr4.splice(-2, 0, 'c');
myArr4.splice(-1, 0, 'e');
console.log(myArr4);

//13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const unSortArr = [3, 4, 1, 2, 10, 7];
unSortArr.sort(function (a, b) {
    return a - b;
});
console.log(unSortArr);

//14. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
const obj = { js: 'test', jq: 'hello', css: 'world' };
console.log(Object.keys(obj));

//15. Необходимо создать функцию hasElem, которая параметрами будет принимать массив и строку, 
//и возвращать true, если строка есть в массиве, и false - если нет
function hasElem(array, string) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === string) {
            return true;
        }
    }
    return false;
}
const myArray = [2, 3, 1, 5, 'string'];
const test = 'string';
console.log(hasElem(myArray, test));//true

//16. Дан массив с числами. Проверьте, что в этом массиве есть указанное число. Если есть - вернуть true, а если нет - вернуть false.
const myArrayNum1 = [2, 3, 5, 1, 53, 0];
console.log(myArrayNum1.indexOf(0) != -1);//true 
console.log(myArrayNum1.indexOf(7) != -1);//false 

//17. Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть -  вернуть true, а если нет - вернуть false.
function checkTwoNumInRow(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1]) {
            return true;
        }
    }
    return false;
}
const myArrNum = [1, 4, 3, 50, 50];
console.log(checkTwoNumInRow(myArrNum));