var assert = require('chai').assert;

let stateBefore = 0;

const updateState = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + action.count;
        case 'DEC':
            return state - action.count;
        default:
            return state;
    }
};

assert.equal(updateState(0, { type: 'INC', count: 2 }), 2);
assert.equal(updateState(1, { type: 'SOME_ACTION' }), 1);
assert.equal(updateState(1, { type: 'DEC', count: 2 }), -1);

console.log('Tests passed!');