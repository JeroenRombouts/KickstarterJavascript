const Vehicle = require('./vehicle')

module.exports = class Car extends Vehicle {
    constructor(type, make, color, year) {
        super(type);
        this.make = make;
        this.color = color;
        this.year = year;
    }
}