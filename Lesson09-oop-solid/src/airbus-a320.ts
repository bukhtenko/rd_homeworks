import { IPlane } from './iplane';

export class AirbusA320 implements IPlane {
    public producer: string;
    public model: string;
    public numberOfPassengers: number;
    public range: number;
    public fuelConsumption: number;

    public constructor() {
        this.producer = 'Airbus';
        this.model = 'A320 basic';
        this.numberOfPassengers = 150;
        this.range = 5000;
        this.fuelConsumption = 120000;
    }

    public fuelEfficiency(): void {
        const efficiency: number = this.fuelConsumption / this.range / this.numberOfPassengers;
        console.log(`${this.producer} ${this.model} fuel efficiency is ${efficiency}`);
    }
}
