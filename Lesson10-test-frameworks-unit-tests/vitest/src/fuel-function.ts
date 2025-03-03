import { IPlane } from './iplane';

// функція з уроку 9, яка приймає на вхід йнтерфейс, для роботи з його нащадками
export function calculateFuelEfficiency(plane: IPlane): void {
    plane.fuelEfficiency();
}
