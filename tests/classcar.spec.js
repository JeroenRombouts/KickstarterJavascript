const Car = require('../src/chapter6-objects/classy-car');

describe("objects with ES6 classes", () => {
    it('a new car should have typeof object', () => {
        const car = new Car('car', 'Audi', 'blue', 2015);
        expect(typeof(car) === 'object').toBeTruthy();
    });
    it('a new car should be instance of car', () => {
        const car = new Car('car', 'Audi', 'blue', 2015);
        expect(car instanceof Car);
    });

    it('extends keyword does copy, a car should have its own property vehicletype', () => {
        const car = new Car('car', 'Audi', 'blue', 2015);
        expect(car.hasOwnProperty('vehicletype')).toBeTruthy();
    });

    it('__prototype__', () => {
        const car = new Car('Audi', 'blue', 2015);
        expect(car.__prototype__).toBe();
    })
})