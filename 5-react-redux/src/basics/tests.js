let Actions = require('./actions.js');
let assert = require('chai').assert;
let reducer = require('./reducer.js');

assert.equal(reducer(0, Actions.INCREMENT), 2);
assert.equal(reducer(1, Actions.SOMEACTION), 1);
assert.equal(reducer(1, Actions.DECREMENT), -1);

console.log('Tests passed!');