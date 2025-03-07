import { expect } from 'chai';
import { AirbusA320 } from '../src/airbus-a320';

describe('Юніт тест для класу AirbusA320', () => {
    it('Перевіряємо чи показник паливної ефективності менший за 0,5', () => {
        const testPlaneA320 = new AirbusA320();
        const efficiencyA320 = testPlaneA320.fuelEfficiency();
        expect(efficiencyA320).to.be.lessThan(0.5);
    });
});
