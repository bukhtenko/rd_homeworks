import { describe, it, expect } from 'vitest';
import { IPlane } from 'src/iplane';
import { calculateFuelEfficiency } from 'src/fuel-function';

class TestPlane implements IPlane {
    public producer = 'Airbus';
    public model = 'A350';
    public numberOfPassengers = 250;
    public range = 11000;
    public fuelConsumption = 140000;

    public fuelEfficiency(): void {
        console.log('Перевірка паливної ефективності');
    }
}

describe('calculateFuelEfficiency', () => {
    it('Функція має відпрацьовувати нормально', () => {
        const testPlane = new TestPlane();
        calculateFuelEfficiency(testPlane);
    });
    it('Перевірка назви виробника', () => {
        const testPlane = new TestPlane();
        expect(testPlane.producer).toBe('Airbus'); // Додаткова перевірка назви виробника
    });
});
