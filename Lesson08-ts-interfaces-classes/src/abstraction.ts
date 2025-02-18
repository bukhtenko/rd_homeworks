export abstract class CarType {
    public range = 0;
    public tankVolumeOne = 0;
    public tankVolumeTwo = 0;
    public fuelCost = 0;

    public constructor(a: number, b: number, c: number, d: number) {
        this.range = a;
        this.tankVolumeOne = b;
        this.tankVolumeTwo = c;
        this.fuelCost = d;
    }

    public fuelConsumption(): number {
        return (this.tankVolumeOne + this.tankVolumeTwo) / (this.range / 100);
    }

    public abstract valuePerKm(): number;
}

export class BigTruck extends CarType {
    public constructor(a: number, b: number, c: number, d: number) {
        super(a, b, c, d);
    }

    public valuePerKm(): number {
        return ((this.tankVolumeOne + this.tankVolumeTwo) / this.range) * this.fuelCost;
    }
}

export class SmallTruck extends CarType {
    public constructor(a: number, b: number, c: number, d: number) {
        super(a, b, c, d);
    }

    public valuePerKm(): number {
        return (this.tankVolumeOne / this.range) * this.fuelCost;
    }
}
//можливо не дуже вдало підібрав приклад, але як зрозумів, то було вже пізно))
