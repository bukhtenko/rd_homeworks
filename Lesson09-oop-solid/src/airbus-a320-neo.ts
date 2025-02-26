import { AirbusA320 } from './airbus-a320';

export class AirbusA320Neo extends AirbusA320 {
    public engineProducer: string;

    public constructor(model: string, engineProducer: string) {
        super();
        this.engineProducer = engineProducer;
    }

    public setModel(newModel: string): void {
        this.model = newModel;
    }

    private setEngineProducer(newEngineProducer: string): void {
        this.engineProducer = newEngineProducer;
    }

    public fuelEfficiency(): void {
        const efficiency: number = this.fuelConsumption / this.range / this.numberOfPassengers;
        console.log(`${this.producer} ${this.model} fuel efficiency with new engines from ${this.engineProducer} is ${efficiency}`);
    }
}
