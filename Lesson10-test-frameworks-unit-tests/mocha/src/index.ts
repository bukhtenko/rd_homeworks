import { AirbusA320 } from './airbus-a320';
import { AirbusA320Neo } from './airbus-a320-neo';
import { AirbusA380TwoDecks } from './airbus-a380-class'; // додано із врахуванням зауважень
import { calculateFuelEfficiency } from '../../vitest/src/fuel-function';

const myAirbus = new AirbusA320();
myAirbus.fuelEfficiency();
console.log('**************');

const myAirbusA320Neo = new AirbusA320Neo('A320 NEO', 'Rolls-Royce');
myAirbusA320Neo.fuelEfficiency();
calculateFuelEfficiency(myAirbusA320Neo);
console.log('**************');

const airbusA380TwoDecks = new AirbusA380TwoDecks(); // додано із врахуванням зауважень
airbusA380TwoDecks.fuelEfficiency();
calculateFuelEfficiency(airbusA380TwoDecks);
