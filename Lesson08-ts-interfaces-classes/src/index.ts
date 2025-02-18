import { CarType } from './abstraction';
import { BigTruck } from './abstraction';
import { SmallTruck } from './abstraction';

const bigTruck = new BigTruck(2000, 800, 1200, 60);
const smallTruck = new SmallTruck(500, 100, 0, 56);
console.log('Вартість одного кілометра пробігу', bigTruck.valuePerKm());
console.log('Витрата палива, л/100 км', bigTruck.fuelConsumption());

function outSide(obj: CarType): string {
    return `Параметри автомобіля ${obj.range}, ${obj.tankVolumeOne}, ${obj.tankVolumeTwo}, ${obj.fuelCost} , відповідно вартість одного кілометра пробігу ${obj.valuePerKm()} грн., а витрата пального ${obj.fuelConsumption()} л.`;
}

console.log(outSide(bigTruck));
console.log(outSide(smallTruck));
