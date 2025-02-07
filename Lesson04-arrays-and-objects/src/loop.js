console.log('У наступному циклі for змінна i прийматиме такі значення:');
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log('*****************');

console.log('У цьому циклі while змінна i має приймати такі ж самі значення:');
let a = 0;
while (a < 10) {
    console.log(a);
    a++;
}
console.log('*****************');

console.log('Це вже while з перевіркою після виконання:');
let b = 0;
do {
    console.log(b);
    b++;
} while (b < 10);
console.log('*****************');

console.log('Тепер вниз від 100 до 0 разом з for:');
for (let d = 100; d > -1; d += -10) {
    console.log(d);
}
console.log('*****************');

console.log('Тепер вниз від 100 до 0 разом з while:');
let e = 100;
while (e > -1) {
    console.log(e);
    e += -10;
}
console.log('*****************');

console.log('Від 100 до 0 разом з тим while, де умова перевіряється після ітерації:');
let f = 100;
do {
    console.log(f);
    f += -10;
} while (f > -1);
console.log('*****************');
