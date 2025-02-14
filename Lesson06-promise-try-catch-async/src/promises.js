console.log('Намагаюся розібратися як працює promise. Важкувато');
const somePromise = new Promise((resolve, reject) => {
    const success = 1 === '1';
    if (success) {
        resolve('Не може бути, це не те саме');
    } else {
        reject(new Error('Все-таки це різні речі'));
    }
});

somePromise
    .then((message) => {
        console.log('Це виводиться якщо ОК -', message);
    })
    .catch((error) => {
        console.error('Це виводиться якщо порівнювані величини різні -:', error);
    })
    .finally(() => {
        console.log('Здається працює)');
    });
console.log('*****************');

fetch('https://swapi.dev/api/planets/3/?format=json')
    .then((response) => {
        return response.json();
    })
    .then((e) => console.log('Дані планети Явін', e))
    .catch((e) => console.log('Щось пішло не так', e))
    .finally(() => console.log('Тепер працюю з fetch, тестовий сайт https://swapi.dev'));
console.log('*****************');

console.log('Той самий сайт, переробив функцію за зразком тієї, яка була на лекції');
function reuseData() {
    return fetch('https://swapi.dev/api/planets/3/?format=json')
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                console.log('Дані отримано!');
                handleData(data);
            }
        })
        .catch((error) => {
            console.error('А може немає такої планети?', error);
        });
}

function handleData(resp) {
    console.log('Маємо такі дані:', resp);
}

reuseData();
