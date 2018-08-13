const doThing = require('../src/promises/doThing')

describe('doThings(maxCount)', () => {
    it('when passed maxcount should return a promise with count or fail with count', () => {
        expect.assertions(1);
        return doThing(10)
            .then(data => expect(data <= 10).toBeTruthy())
            .catch(error => expect(error >= 10).toBeTruthy());
    })
})