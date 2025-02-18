import { StarWarsPerson, personData } from './interface';

export class ResultClass {
    private _name;

    public get name(): string {
        return this._name;
    }

    public set name(name) {
        this._name = name;
    }

    public results: Partial<StarWarsPerson>[];
    // protected count: number;
    // protected next: string | null;
    // protected previous: string | null;

    public constructor(name: string, users: StarWarsPerson[]) {
        this._name = name;
        this.results = users;
    }

    public sayHello(): void {
        console.log(`May the force be with you ${this._name}`);
    }
}

(async () => {
    const data = await personData();
    console.log(data);
    const data2 = new ResultClass('Luke', data.results);
    data2.sayHello();
    console.log('You can find his planet here', data2.results[0].homeworld);
})();
