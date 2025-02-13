// Тут мені було важко, навіть з гуглом
console.log('Перевикористав функцію з async-await.js');
console.log('Спочатку оголосив дві функції окремо, і викликав їх в try-catch');

async function secretData() {
    const response = await fetch('https://sssswapi.dev/api/planets/3/?format=json'); //урл некоректний
    console.log('Маємо ++++++++++++++', response);

    const json = await response.json();
    console.log('Такі дані по планеті:', json);

    return json;
}

async function trueData() {
    const response = await fetch('https://swapi.dev/api/planets/1/?format=json'); //урл правильний
    console.log('Маємо -------------------', response);

    const json = await response.json();
    console.log('Такі дані по планеті:', json);

    return json;
}

function generateError() {
    throw new Error('Помилка для вкладеного try catch');
}

(async () => {
    try {
        await secretData();
        console.log('Спрацював try');
    } catch {
        try {
            await trueData();
            console.log('Спрацював внутрішній try');
        } catch {
            generateError();
        }
    }
    console.log('Здається працює!');
    console.log('*****************');
})();

//Під час виконання пробував використовувати fetch всередині, зрештою вирішив зробити такий варіант окремо
(async () => {
    try {
        await fetch('https://swapi.dev/api/planets/3/?format=json');
        const responseOne = await fetch('https://swwwwapi.dev/api/planets/3/?format=json'); //урл некоректний
        const json = await responseOne.json();
        console.log('Тут try відробив в 2 варіанті', json);
    } catch {
        try {
            await fetch('https://swapi.dev/api/planets/2/?format=json');
            const responseTwo = await fetch('https://swwwwapi.dev/api/planets/2/?format=json'); //урл теж неправильний
            const json = await responseTwo.json();
            console.log('Тут внутрішній try відпрацював в 2 варіанті', json);
        } catch {
            generateError();
        }
    }
    console.log('І це теж працює - 2 варіант))');
    console.log('*****************');
})();
