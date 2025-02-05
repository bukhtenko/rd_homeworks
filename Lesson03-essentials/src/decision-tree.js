const a = 20;
const b = 143;
const c = true;
const d = false;

console.log('Просте порівняння двох чисел');
if (a > b) {
    console.log('a більше за b');
} else {
    console.log('b більше за a');
}
console.log('*****************');

console.log('Тепер вкладеності');
if (a < b) {
    if (c == b) {
        console.log('c та b однакові');
    } else {
        console.log('с та b не однакові');
    }
} else {
    console.log('b більше за a');
}
console.log('*****************');

if (!d) {
    console.log('d це все-таки false');
}
console.log('*****************');

if (c || d) {
    console.log('Десь причаївся false');
} else {
    console.log('Обидві змінні true');
}
