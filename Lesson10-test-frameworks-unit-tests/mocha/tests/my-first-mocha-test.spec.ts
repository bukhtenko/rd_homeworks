import { expect } from 'chai';

describe('Mocha перевірка ділення 10 на 5', () => {
    let divideResult: number;
    it('Присвоюємо результат ділення 10 / 5 змінній', () => {
        divideResult = 10 / 5;
    });

    it('Остаточна перевірка чи змінна дорівнює 2', () => {
        expect(divideResult).to.be.equal(2);
    });
});
