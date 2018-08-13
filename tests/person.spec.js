const Person = require('../src/person');

describe("hidden field", () => {
    it('should create a person without name property', () => {
        let jan = new Person();
        expect(jan.privateName).toBeUndefined()
    });
    it('should create a person where we can set the name', () => {
        let jan = new Person();
        jan.name = "Jan";
        expect(jan.name).toBe('Jan')
    })
})