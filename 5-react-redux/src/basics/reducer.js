var assert = require('chai').assert;

let stateBefore = 0;

const updateState = (state = 0, action) => {
    switch (action) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
};

assert.equal(updateState(0,'INC'), 1);
assert.equal(updateState(1,'INC'), 2);
assert.equal(updateState(1,'DEC'), 0);

console.log('Tests passed!');