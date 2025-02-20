import { StarWarsPerson } from './interface';
//import { personData } from './function-for-interfaces';

export class PeopleFromStarWars {
    private _name;

    public get name(): string {
        return this._name;
    }

    public set name(name) {
        this._name = name;
    }

    public results: Partial<StarWarsPerson>[];

    public constructor(name: string, users: StarWarsPerson[]) {
        this._name = name;
        this.results = users;
    }

    public sayHello(): void {
        console.log(`May the force be with you ${this._name}`);
    }
}
