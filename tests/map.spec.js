describe("Array.map", () => {
    it('returns a new array with the result of the function applied ', () => {
        const numbers = [4, 9, 16, 25];
        let actual = numbers.map((n) => n * 2);
        expect(actual).not.toBe(numbers); //not the same array
        expect(actual).toEqual([8, 18, 32, 50]);

    });

})