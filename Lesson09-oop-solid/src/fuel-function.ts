import { IPlane } from "./iplane";

// функція, яка приймає на вхід йнтерфейс, для роботи з його нащадками
export function calculateFuelEfficiency(plane: IPlane): void {
    console.log('Нова функція видасть такий результат')
    plane.fuelEfficiency();
}