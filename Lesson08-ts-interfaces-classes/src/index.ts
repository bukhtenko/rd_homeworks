import { CarType } from './abstraction';
import { BigTruck } from './abstraction';
import { SmallTruck } from './abstraction';

import { PeopleFromStarWars } from './classes'; //перенесено сюди з файлу classes.ts
import { personData } from './function-for-interfaces';

const bigTruck = new BigTruck(2000, 800, 1200, 60);
const smallTruck = new SmallTruck(500, 100, 0, 56);
console.log('Вартість одного кілометра пробігу', bigTruck.valuePerKm());
console.log('Витрата палива, л/100 км', bigTruck.fuelConsumption());
console.log('*****************');

function outSide(obj: CarType): string {
    return `Параметри автомобіля ${obj.range}, ${obj.tankVolumeOne}, ${obj.tankVolumeTwo}, ${obj.fuelCost} , відповідно вартість одного кілометра пробігу ${obj.valuePerKm()} грн., а витрата пального ${obj.fuelConsumption()} л.`;
}

console.log(outSide(bigTruck));
console.log(outSide(smallTruck));
console.log('*****************');

(async () => {
    const data = await personData();
    console.log(data);
    const data2 = new PeopleFromStarWars('Luke', data.results);
    data2.sayHello();
    console.log('You can find his planet here', data2.results[0].homeworld);
})();
