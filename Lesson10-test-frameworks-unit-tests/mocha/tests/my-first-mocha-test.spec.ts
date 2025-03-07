import { expect } from 'chai';

describe('Mocha перевірка ділення 10 на 5', () => {
    it('Присвоюємо результат ділення 10 / 5 змінній', () => {
        const divideResult = 10 / 5;

        expect(divideResult).to.be.equal(2);
    });
});
