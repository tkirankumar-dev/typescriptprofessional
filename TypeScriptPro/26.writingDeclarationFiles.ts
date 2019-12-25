function simplefunction(name: string): void{}
simplefunction('Kiran');

// when we want to use library
// In terminal - install - npm install lodash

import * as tcec from 'lodash';
// tcec.ownfunction(); // own function - we won't get any compilation errors.

//lodash examples
console.log(tcec.chunk([1,2,3,4,5], 2)); // [[1,2], [3,4]] - convert into two value chunks in an array.