const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    const expected = 5;
    const actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    const expected = 5555;
    const actual = sum(1234, 4321);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    const expected = -10;
    const actual = sum(-3, -7);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    const expected = 6;
    const actual = sum(6, 0);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
