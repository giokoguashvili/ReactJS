let Actions = require('./actions.js');
let assert = require('chai').assert;
let reducer = require('./reducer.js');
let Store = require('./store.js');

assert.equal(reducer(0, Actions.INCREMENT), 2);
assert.equal(reducer(1, Actions.SOMEACTION), 1);
assert.equal(reducer(1, Actions.DECREMENT), -1);
console.log('reducer tests passed!');

let store = new Store(reducer, 0);

assert.equal(
    2, 
    store.update(Actions.INCREMENT).getState()
);
assert.equal(
    0, 
    store.update(Actions.DECREMENT).getState()
);
assert.equal(
    0,
    store.update(Actions.SOMEACTION).getState()
);
console.log('store tests passed!');
