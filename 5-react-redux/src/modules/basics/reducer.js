const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return state + action.count;
        case 'DEC':
            return state - action.count;
        default:
            return state;
    }
};

module.exports = reducer;