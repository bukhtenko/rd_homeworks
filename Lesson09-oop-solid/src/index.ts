import { AirbusA320 } from './airbus-a320';
import { AirbusA320Neo } from './airbus-a320-neo';
import { airbusA380 } from './iairbus-a380';

const myAirbus = new AirbusA320();
myAirbus.fuelEfficiency();

const myAirbusA320Neo = new AirbusA320Neo('A320 NEO', 'Rolls-Royce');
myAirbusA320Neo.fuelEfficiency();

airbusA380.fuelEfficiency();
