console.log('А тепер всі ті ж самі функції, що і в functions.js, але перероблені на стрілочні');
const createList = (firstName: string, lastName: string, salary: number): void => console.log(firstName, lastName, salary);

createList('Bob', 'Johnson', 10560);
console.log('*****************');

console.log('Наступна');
const arrayWithNumbers = (someNumber: number[]): void => console.log(someNumber);
console.log('*****************');

const arrayForFunc: number[] = [182, 5, 24];
arrayWithNumbers(arrayForFunc);
console.log('*****************');

console.log('Створення масива та передача його функції, в якій знаходжу суму його елементів');
const arr: number[] = [22, 41, 3, 19, 48, 32, 401, 0];
console.log('Маємо такий масив', arr);
console.log('*****************');

const sumOfArray = (arr: number[]): void => {
    //зараз тут вказує що тип вже зазначено раніше, якщо ж прибрати - пише що тип неявно any
    let sum = 0;
    for (const value of arr) {
        sum += value;
    }
    console.log('Сума елементів нашого масиву складає', sum);
    console.log('*****************');
};

sumOfArray(arr);

const arrayOfStrings: string[] = ['Hello!', 'Sirius', 'robot dreams', 'Git', '145'];
const arrayOfNumbers: number[] = [852, 22, 15, 8, 97, 110];

sumOfArray(arrayOfNumbers);

console.log('Оскільки для стрінгових значень маємо на початку 0, то трохи змінив функцію');
const sumOfArrayStrings = (arrayOfStrings: string[]): void => {
    //зараз тут вказує що тип вже зазначено раніше, якщо ж прибрати - пише що тип неявно any
    let sum: string = arrayOfStrings[0];
    for (let value = 1; value < arrayOfStrings.length; value++) {
        sum += arrayOfStrings[value];
    }
    console.log('Сума елементів нашого масиву складає', sum);
    console.log('*****************');
};
sumOfArrayStrings(arrayOfStrings);

console.log('Переробив функціональний вираз');
const addText: string[] = arrayOfStrings.map((text) => text + ' ' + text);
console.log(addText);
