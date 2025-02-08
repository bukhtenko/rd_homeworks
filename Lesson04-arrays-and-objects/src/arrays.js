const arrayOfNumbers = [22, 0, 15, 8, 96, 268, 4, 10, 700, 145];
const arrayOfStrings = ['Sony', 'Canon', 'Nikon', 'Fuji', 'Hasselblad', 'Olympus'];
const arrayOfBooleans = [false, true, true, false, false, true, false];
const arrayOfAny = ['Mclaren', 2077, true, '325', false, { user: 'Batman' }];
const bigArray = [
    [10, 24, 123],
    [0, 430, 66],
    [225, 147, 509]
];
console.log('Створив кілька масивів, один навіть двовимірний))');
console.log('*****************');

console.log('Це масив з числами', arrayOfNumbers);
console.log('*****************');

console.log('Це масив зі стрінговими даними', arrayOfStrings);
console.log('*****************');

console.log('Це масив з булевими величинами', arrayOfBooleans);
console.log('*****************');

console.log('Ну а в цьому всього потрохи', arrayOfAny);
console.log('*****************');

console.log('Це і є двовимірний масив', bigArray);
console.log('*****************');

console.log('В центрі великого масиву', bigArray[1][1]);
console.log('*****************');

console.log('Першим елементом в масиві arrayOfAny є:', arrayOfAny.at(0));
console.log('*****************');

const filteredValues = arrayOfAny.filter((el) => typeof el === 'object');
console.log('Відфільтруємо object в масиві arrayOfAny', filteredValues);
console.log('*****************');

const findName = arrayOfStrings.find((name) => name == 'Fuji');
console.log('Шукаємо в Fuji в масиві arrayOfStrings:', findName);
console.log('*****************');

const sorted = arrayOfNumbers.sort();
console.log('Просте сортування масиву arrayOfNumbers:', sorted);
console.log('*****************');

const sortedDesc = arrayOfNumbers.sort((a, b) => b - a);
console.log('Сортуємо масив arrayOfNumbers за спаданням:', sortedDesc);
console.log('*****************');

console.log('Подивимося чи є в масиві arrayOfNumbers число 145');
const included = arrayOfNumbers.includes(145);
if (included == true) {
    console.log('Так, воно там є!');
} else {
    console.log('Його там немає');
}
console.log('*****************');

const someRow = bigArray.join(' * ');
console.log('Спробуємо вивести вміст великого масиву', someRow);
console.log('*****************');

const unitedArray = arrayOfNumbers.concat(arrayOfAny);
console.log('Об"єднаємо 2 масиви ти виведемо те що в нас вийшло:', unitedArray.join(' - '));
console.log('*****************');

const uniteBigArray = bigArray.concat([[12, 5, 587]]);
console.log('Тут спробував погратися з великим масивом, наче вийшло:', uniteBigArray.join(' - '));
console.log('*****************');

console.log('Пройдемося по масиву з текстом за допомогою forEach');
arrayOfNumbers.forEach((camera) => camera);
console.log(arrayOfStrings);
console.log('*****************');

console.log('Тепер за допомогою map спробую в масиві з числами піднести їх всі до квадрата');
const levelUp = arrayOfNumbers.map((up) => up ** 2);
console.log(levelUp);
