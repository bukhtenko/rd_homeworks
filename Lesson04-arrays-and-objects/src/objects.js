const cars = {
    car1: {
        brand: 'Ferrari',
        model: 'Modena',
        'main characteristics': {
            price: 250000,
            speed: 320,
            power: 640,
            convert1: function () {
                console.log('Вартість', cars.car1.model, 'в Україні', this.price * 42);
            }
        },
        ff: function () {
            console.log(this.brand);
        }
    },
    car2: {
        brand: 'Porsche',
        model: '911',
        'main characteristics': {
            price: 200000,
            speed: 330,
            power: 620,
            convert2: function () {
                console.log('Вартість', cars.car2.model, 'в Україні', this.price * 42);
            }
        }
    },
    car3: {
        brand: 'Bugatti',
        model: 'Chiron',
        'main characteristics': {
            price: 2400000,
            speed: 510,
            power: 1800,
            convert3: function () {
                console.log('Вартість', cars.car3.model, 'в Україні', this.price * 42);
            }
        }
    }
};

console.log('Оголошую новий об"єкт supercars, в нього прокидую дані з об"єкта cars і після цього в ньому змінюю один із брендів');
let superCars = {};
superCars = cars;
superCars.car1.brand = 'Testarossa';
console.log('supercars виглядає так', superCars);
console.log('--------------- А cars тепер виглядає так', cars);
console.log('*****************');

console.log('Як працює Object.entries');
console.log(Object.entries(cars));
console.log('*****************');

console.log('Подивимося які основні дані маємо для машин через Object.keys');
console.log(Object.keys(cars.car2));
console.log('*****************');

console.log('Дані для другої машини через Object.values');
console.log(Object.values(cars.car2));
console.log('*****************');

console.log('Так я думав вивести ціну для третьої машини через Object.values - не получилося');
console.log(Object.values(cars.car3['main characteristics'].price));
console.log('*****************');

console.log('От так мало би бути');
console.log(cars.car3['main characteristics'].price);
console.log('*****************');

console.log('Тепер Object.entries для всіх машин');
console.log(cars);
console.log('*****************');

console.log('Зробив забувши що Object.assign тільки для одновимірних масивів, вирішив залишити в домашці');
const coolcars = new Object();
Object.assign(coolcars, cars);
console.log(Object.keys.coolcars);
console.log('*****************');

console.log('Клоную об"єкт cars за допомогою JSON.parse');
const coolCars = JSON.parse(JSON.stringify(cars));
console.log('Його клон superCars виглядає так', coolCars);
console.log('*****************');

console.log('Тепер виводжу з об"єкта вартість кожної із моделей в гривні');
cars.car1['main characteristics'].convert1();
cars.car2['main characteristics'].convert2();
cars.car3['main characteristics'].convert3();
