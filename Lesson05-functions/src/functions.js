console.log('Для початку саме просте - створюю функцію та викликаю її, передаючи значення аргументів');
function createList(firstName, lastName, salary) {
    console.log(firstName, lastName, salary);
}

createList('Bob', 'Johnson', 10560);
console.log('*****************');

console.log('Створюю ще одну функцію і передаю їй масив чисел');
function arrayWithNumbers(someNumber) {
    console.log(someNumber);
}
const arrayForFunc = [182, 5, 24];
arrayWithNumbers(arrayForFunc);
console.log('*****************');

console.log('Створюю масив, потім функцію, в якій знаходжу суму елементів масиву');
const arr = [22, 41, 3, 19, 48, 32, 401, 0];
console.log('Маємо такий масив', arr);

function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log('Сума елементів нашого масиву складає', sum);
    console.log('*****************');
}

sumOfArray(arr);

const arrayOfStrings = ['Hello!', 'Sirius', 'robot dreams', 'Git', '145'];
const arrayOfNumbers = [852, 22, 15, 8, 97, 110];

sumOfArray(arrayOfStrings);
sumOfArray(arrayOfNumbers);

console.log('Оскільки для стрінгових значень маємо на початку 0, то трохи змінив функцію');
function sumOfArrayStrings(arr) {
    let sum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log('Сума елементів нашого масиву складає', sum);
    console.log('*****************');
}
sumOfArrayStrings(arrayOfStrings);

console.log('Спробував написати функціональний вираз');
const addText = arrayOfStrings.map(function (text) {
    return text + ' ' + text;
});
console.log(addText);
