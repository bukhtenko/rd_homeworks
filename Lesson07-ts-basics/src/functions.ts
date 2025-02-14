console.log('Спробую задати всі необхідні типи');
function createNewList(firstName: string, lastName: string, salary: number): void {
    console.log(firstName, lastName, salary);
}

createNewList('Bob', 'Johnson', 10560);
console.log('*****************');

console.log('Створюю ще одну функцію і передаю їй масив чисел');
function arrayWithNumber(someNumber: number[]): void {
    console.log(someNumber);
}
const arrayForFuncNew: number[] = [182, 5, 24];
arrayWithNumber(arrayForFuncNew);
console.log('*****************');

console.log('Створюю масив, потім функцію, в якій знаходжу суму елементів масиву');
const arrNew: number[] = [22, 41, 3, 19, 48, 32, 401, 0];
console.log('Маємо такий масив', arrNew);

function sumOfArrayNew(arrNew: number[]): void {
    //зараз тут вказує що тип вже зазначено раніше, якщо ж прибрати - пише що тип неявно any
    let sum = 0;
    for (const i of arrNew) {
        sum += i;
    }
    console.log('Сума елементів нашого масиву складає', sum);
    console.log('*****************');
}

sumOfArrayNew(arrNew);

const arrayOfStringsNew: string[] = ['Hello!', 'Sirius', 'robot dreams', 'Git', '145'];
const arrayOfNumbersNew: number[] = [852, 22, 15, 8, 97, 110];

sumOfArrayNew(arrayOfNumbersNew);

console.log('Оскільки для стрінгових значень маємо на початку 0, то трохи змінив функцію');
function sumOfArrayString(arrayOfStringsNew: string[]): void {
    //зараз тут вказує що тип вже зазначено раніше, якщо ж прибрати - пише що тип неявно any
    let sum = arrayOfStringsNew[0];
    for (let i = 1; i < arrayOfStringsNew.length; i++) {
        sum += arrayOfStringsNew[i];
    }
    console.log('Сума елементів нашого стрінгового масиву складає', sum);
    console.log('*****************');
}
sumOfArrayString(arrayOfStringsNew);

console.log('Спробував написати функціональний вираз');
const addTextNew = arrayOfStringsNew.map(function (text) {
    return text + ' ' + text;
});
console.log(addTextNew);
