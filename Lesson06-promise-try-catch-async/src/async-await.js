console.log('Код із застосуванням async-await');
async function planetData() {
    const response = await fetch('https://swapi.dev/api/planets/2/?format=json');
    console.log('Маємо для першої планети ', response);

    const json = await response.json();
    console.log('Такі дані по першій планеті:', json);
    return json;
}

async function secretData() {
    const data = await planetData();
    return data;
}

(async () => {
    await secretData();
})();

async function anotherPlanetData() {
    const response = await fetch('https://swwapi.dev/api/planets/3/?format=json'); //урл некоректний
    console.log('Маємо для другої планети ', response);

    const json = await response.json();
    console.log('Такі дані по другій планеті:', json);

    return json;
}

async function somePlanetData() {
    const data = await anotherPlanetData();
    return data;
}

(async () => {
    await somePlanetData();
})();
