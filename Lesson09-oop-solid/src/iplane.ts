export interface IPlane {
    producer: string;
    model: string;
    numberOfPassengers: number;
    range: number;
    fuelConsumption: number;

    fuelEfficiency(): void;
}
