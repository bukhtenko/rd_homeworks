import { IPlane } from './iplane';

export class AirbusA380TwoDecks implements IPlane {
    public producer: string;
    public model: string;
    public numberOfPassengers: number;
    public range: number;
    public fuelConsumption: number;
    public numberOfDecks: number;

    public constructor() {
        this.producer = 'Airbus';
        this.model = 'A380-800';
        this.numberOfPassengers = 800;
        this.range = 14000;
        this.fuelConsumption = 200000;
        this.numberOfDecks = 2;
    }

    public fuelEfficiency(): number {
        const efficiency: number = this.fuelConsumption / this.range / this.numberOfPassengers;
        console.log(`${this.producer} ${this.model} fuel efficiency is ${efficiency}`);
        return efficiency;
    }
}
