console.log('Код із застосуванням async-await');
async function planetData() {
    const response = await fetch('https://swapi.dev/api/planets/2/?format=json');
    console.log('Маємо ', response);

    const json = await response.json();
    console.log('Такі дані по планеті:', json);

    return json;
}

planetData();
console.log('1*****************');

async function secretData() {
    const response = await fetch('https://swwapi.dev/api/planets/3/?format=json'); //урл некоректний
    console.log('Маємо ', response);

    const json = await response.json();
    console.log('Такі дані по планеті:', json);

    return json;
}

secretData();
console.log('2*****************');
