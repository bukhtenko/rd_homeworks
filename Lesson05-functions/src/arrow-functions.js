console.log('А тепер всі ті ж самі функції, що і в functions.js, але перероблені на стрілочні');
const createList = (firstName, lastName, salary) => console.log(firstName, lastName, salary);

createList('Bob', 'Johnson', 10560);
console.log('*****************');

console.log('Наступна');
const arrayWithNumbers = (someNumber) => console.log(someNumber);

const arrayForFunc = [182, 5, 24];
arrayWithNumbers(arrayForFunc);
console.log('*****************');

console.log('Створення масива та передача його функції, в якій знаходжу суму його елементів');
const arr = [22, 41, 3, 19, 48, 32, 401, 0];
console.log('Маємо такий масив', arr);

const sumOfArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log('Сума елементів нашого масиву складає', sum);
    console.log('*****************');
}; //тут спочатку зніс ці фігурні дужки, але потім зрозумів як це все потрібно було прокинути))

sumOfArray(arr);

const arrayOfStrings = ['Hello!', 'Sirius', 'robot dreams', 'Git', '145'];
const arrayOfNumbers = [852, 22, 15, 8, 97, 110];

sumOfArray(arrayOfStrings);
sumOfArray(arrayOfNumbers);

console.log('Оскільки для стрінгових значень маємо на початку 0, то трохи змінив функцію');
const sumOfArrayStrings = (arr) => {
    let sum = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log('Сума елементів нашого масиву складає', sum);
    console.log('*****************');
};
sumOfArrayStrings(arrayOfStrings);

console.log('Переробив функціональний вираз');
const addText = arrayOfStrings.map((text) => text + ' ' + text); //тут сам не справився, трохи гуглив
console.log(addText);
