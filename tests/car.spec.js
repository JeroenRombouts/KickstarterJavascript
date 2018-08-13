const Car = require('../src/chapter6-objects/classic-car');

describe("objects pre-ES6", () => {
    it('a new car should have typeof object', () => {
        const car = new Car('Audi', 'blue', 2015);
        expect(typeof(car) === 'object').toBeTruthy();
    });
    it('a new car should be instance of car', () => {
        const car = new Car('Audi', 'blue', 2015);
        expect(car instanceof Car);
    });
    it('__prototype__', () => {
        const car = new Car('Audi', 'blue', 2015);
        expect(car.__prototype__).toBe();
    })
})