/**
 * List of functions we want to perform testing on
 */

module.exports.add = (a, b) => {
    return a + b;
};

module.exports.addAsync = (a, b, callbackFunction) => {
    setTimeout(() => {
        callbackFunction(a + b);
    }, 1000); //should not be more than 2sec because mocha will assume that something is wrong
}

module.exports.square = (x) => {
    return x * x;
}

module.exports.setName = (user, fullName) => {
    let names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};