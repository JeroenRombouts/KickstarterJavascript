module.exports = function doThing(maxCount) {
    return new Promise((resolve, reject) => {
        let counter = 0;

        const checkResolved = () => {
            counter++;
            if (Math.random() > .75) {
                resolve(counter);
            }
            if (counter >= maxCount) {
                reject(counter);
            }
        }
        setInterval(checkResolved, 500)
    });
}