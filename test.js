const ashPokemons = require('./index');

// Test if there is an empty input
const input1 = '';
const expectedOutput1 = 1;
const output1 = ashPokemons(input1);
console.log('Test 1');
console.log('Input:', input1);
console.log('Expected Output:', expectedOutput1);
console.log('Output Result:', output1);
console.log('Test Result:', output1 === expectedOutput1 ? 'Passed' : 'Failed');
console.log();

// Test if there is lowercase in input
const input2 = 'NneE';
const expectedOutput2 = 5;
const output2 = ashPokemons(input2);
console.log('Test 2');
console.log('Input:', input2);
console.log('Expected Output:', expectedOutput2);
console.log('Output Result:', output2);
console.log('Test Result:', output2 === expectedOutput2 ? 'Passed' : 'Failed');
console.log();

// Test if there is whitespace in input
const input3 = 'O S';
const expectedOutput3 = 3;
const output3 = ashPokemons(input3);
console.log('Test 3');
console.log('Input:', input3);
console.log('Expected Output:', expectedOutput3);
console.log('Output Result:', output3);
console.log('Test Result:', output3 === expectedOutput3 ? 'Passed' : 'Failed');
console.log();

// Test for a larger input
const input4 = 'NESOOESSNOEENSONOESSS';
const expectedOutput4 = 10;
const output4 = ashPokemons(input4);
console.log('Test 4');
console.log('Input:', input4);
console.log('Expected Output:', expectedOutput4);
console.log('Output Result:', output4);
console.log('Test Result:', output4 === expectedOutput4 ? 'Passed' : 'Failed');
console.log();

// Test for overlapping movements
const input5 = 'EOEOEOEO';
const expectedOutput5 = 2;
const output5 = ashPokemons(input5);
console.log('Test 5');
console.log('Input:', input5);
console.log('Expected Output:', expectedOutput5);
console.log('Output Result:', output5);
console.log('Test Result:', output5 === expectedOutput5 ? 'Passed' : 'Failed');
console.log();

// Test for input with invalid movements
const input6 = 'EOft';
const expectedOutput6 = 2;
const output6 = ashPokemons(input6);
console.log('Test 6');
console.log('Input:', input6);
console.log('Expected Output:', expectedOutput6);
console.log('Output Result:', output6);
console.log('Test Result:', output6 === expectedOutput6 ? 'Passed' : 'Failed');
console.log();