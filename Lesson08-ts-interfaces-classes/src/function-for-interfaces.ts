// створив цей файл у відповідності до рекомендації
import { StarWarsPersonInfo } from './interface';

// заюзав функцію з 6 уроку із відповідними доробками
export async function personData(): Promise<StarWarsPersonInfo> {
    const response = await fetch('https://swapi.dev/api/people/?search=luke');
    const json = (await response.json()) as StarWarsPersonInfo;
    return json;
}

(async () => {
    const personalInfo = await personData();
    console.log(`Наш персонаж це ${personalInfo.results[0].name}`);
    console.log('Ось всі його дані', personalInfo.results[0]);
})();
