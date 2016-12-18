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

const incrementAction = { type: 'INC', count: 2 };
const decrementAction = { type: 'DEC', count: 2 };
const someAction = { type: 'SOME_ACTION' };

assert.equal(updateState(0, incrementAction), 2);
assert.equal(updateState(1, someAction), 1);
assert.equal(updateState(1, decrementAction), -1);

console.log('Tests passed!');