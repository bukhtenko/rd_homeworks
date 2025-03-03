import { expect } from 'chai';
import { AirbusA380TwoDecks } from '../src/airbus-a380-class';

describe ('Перевірка показників моделі А380', () => {
    const testPlaneA380 = new AirbusA380TwoDecks();
    it ('Перевірка витрати палива для моделі А380', () => {
        const consumptionA380 = testPlaneA380.fuelConsumption;
        //const testPlaneA380 = new AirbusA380TwoDecks();
        expect (consumptionA380).to.be.equal(235000);
    });
    it ('Перевірка паливної ефективності для моделі А380', () => {
        //const efficiencyA380 = testPlaneA380.fuelEfficiency();
        const efficiencyA380 = testPlaneA380.fuelEfficiency();
        expect (efficiencyA380).to.be.lessThanOrEqual(0.015);
    });
});
