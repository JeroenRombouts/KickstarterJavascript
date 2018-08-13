module.exports = function add(x, y) {
    if (!y) {
        throw new Error('Missing parameter');
    }
    if (typeof(x) !== 'number' || typeof(y) !== 'number') {
        throw new Error("One or both parameters are not a number")
    }
    return x + y;
}