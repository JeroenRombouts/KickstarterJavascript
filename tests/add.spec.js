const add = require('../src/add');

describe("add function", () => {
    it('it should return 3 when given 1 and 2', () => {
        expect(add(1, 2)).toEqual(3);
    })
    it('should return 5 when passed 10 and -5', () => {
        const result = add(10, -5);
        expect(result).toEqual(5);
    });

    it('should throw an error with the message “Missing parameter” when either or both parameters are missing', () => {
        expect(() => {
            add(1);
        }).toThrow(/Missing parameter/);
        expect(() => {
            add();
        }).toThrow(/Missing parameter/);
    });
    it('should throw an error with the message “One or both parameters are not a number"', () => {
        expect(() => {
            add('1', 4);
        }).toThrow(/One or both parameters are not a number/);
        expect(() => {
            add(1, '4');
        }).toThrow(/One or both parameters are not a number/);
        expect(() => {
            add('1', '4');
        }).toThrow(/One or both parameters are not a number/);
    });
})