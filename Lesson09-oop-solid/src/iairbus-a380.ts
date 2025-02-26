// цей файл залишив в домашці для себе як зразок розширення інтерфейсу
import { IPlane } from './iplane';

export interface AirbusA380 extends IPlane {
    numberOfDecks: number;
}

export const airbusA380: AirbusA380 = {
    producer: 'Airbus',
    model: 'A380-800',
    numberOfPassengers: 853,
    range: 14500,
    fuelConsumption: 235000,
    numberOfDecks: 2,

    fuelEfficiency(): void {
        const efficiency: number = this.fuelConsumption / this.range / this.numberOfPassengers;
        console.log(`${this.producer} ${this.model} has ${this.numberOfDecks} decks and its fuel efficiency is ${efficiency}`);
    }
};
