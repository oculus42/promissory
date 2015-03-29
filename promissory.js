/**
 * Promissory returns a promise with exposed resolve/reject functions for convenience.
 * @param  {Boolean} [separate]. If true, return an object containing the promise and the functions.
 * @returns {(Promise|Object)} Promise with exposed resolve/reject functions, or object with them separated.
 * @constructor
 */
function Promissory(separate) {

    var foo = {};

    foo.promise = new Promise(function (res, rej) {
        foo.resolve = res;
        foo.reject = rej;
    });

    if (separate === true) {
        return foo;
    }
    foo.promise.resolve = foo.resolve;
    foo.promise.reject = foo.reject;

    return foo.promise;
}
