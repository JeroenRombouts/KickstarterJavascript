module.exports = function Person() {
    // hide the backing variable w/ a closure
    var privateName;
    // create the object we want, w/ the closure
    var nameProp = {
        get name() {
            return privateName;
        },

        set name(val) {
            privateName = val;
        }
    };
    // send back the object
    return nameProp;
};