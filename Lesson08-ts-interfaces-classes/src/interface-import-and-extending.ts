//тут пробував зробити так само як було на лекції
import { StarWarsPersonInfo } from './interface';

interface ExtendedStarWarsPerson extends StarWarsPersonInfo {
    lightsaber_color: string;
}

const result: Partial<ExtendedStarWarsPerson> = {};
result.lightsaber_color = 'blue';
console.log(result);
