# Promissory
A simple convenience method for ES6 Promises.

    var myPromise = Promissory().then(handleSuccess,handleFailure);
    ...
    if (arbitraryCondition) {
        myPromise.resolve('Yay');
    } else {
        myPromise.reject('Boo');
    }

Promissory accepts a single argument `true` which returns the promise, resolve, and reject as an object rather than attaching the functions to the promise. This is convenient if you plan to expose the promise but need the resolve and reject functions separately.

This provides an interface similar to the Promise.defer() concept of Promises/A.
