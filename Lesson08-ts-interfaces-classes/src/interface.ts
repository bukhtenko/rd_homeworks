export interface StarWarsPersonInfo {
    count: number;
    next: string | null;
    previous: string | null;
    results: StarWarsPerson[];
}

export interface StarWarsPerson {
    name: string;
    height: number;
    mass: number;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

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
