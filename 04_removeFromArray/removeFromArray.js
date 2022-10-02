const removeFromArray = function(...args) {
    const array = args[0]
    return array.filter(val => !args.includes(val))
};

// Do not edit below this linex
module.exports = removeFromArray;