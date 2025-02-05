const a = 2.6;
const b = 25;
const c = '25';
const d = 'lorem ipsum';
const e = true;
const f = false;

console.log('Наш набір даних для порівняння:', a, b, c, d, e, f);
console.log('Порівняємо два числа і маємо', a > b);
console.log('Порівняння через ==', b == c);
console.log('Якщо ті ж змінні порівняти через ===, то буде', b === c);
console.log('Тепер спробуємо &&', e && f);
console.log('Тепер ті ж змінні через ||', e || f);
console.log('Ще одна варіація із ||', f || false);
console.log('Тепер робота із not', !e);
