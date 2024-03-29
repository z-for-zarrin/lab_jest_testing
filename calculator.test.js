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

  test('can subtract two small positive numbers', () => {
    const expected = 3;
    const actual = subtract(5, 2);
    expect(actual).toBe(expected);
  })

  test('can subtract two large positive numbers', () => {
    const expected = 1123;
    const actual = subtract(3267, 2144)
    expect(actual).toBe(expected);
  })

  test('can subtract two negative numbers', () => {
    const expected = 4;
    const actual = subtract(-3, -7);
    expect(actual).toBe(expected);
  })

  test('can subtract zero', () => {
    const expected = 2;
    const actual = subtract(2, 0);
    expect(actual).toBe(expected);
  })

  test('can subtract from zero', () => {
    const expected = -2;
    const actual = subtract(0, 2);
    expect(actual).toBe(expected);
  })

});

describe('multiply', () => {

  test('can multiply two small positive numbers', () => {
    const expected = 6;
    const actual = multiply(2, 3);
    expect(actual).toBe(expected);
  })

  test('can multiply two large positive numbers', () => {
    const expected = 16_719_002;
    const actual = multiply(5246, 3187);
    expect(actual).toBe(expected);
  })

  test('can multiply a negative and positive number', () => {
    const expected = -6;
    const actual = multiply(2, -3);
    expect(actual).toBe(expected);
  })

  test('can multiply two negative numbers', () => {
    const expected = 28;
    const actual = multiply(-4, -7);
    expect(actual).toBe(expected);
  })

  test('can multiply by zero', () => {
    const expected = 0;
    const actual = multiply(2, 0);
    expect(actual).toBe(expected);
  })

});

describe('divide', () => {

  test('can divide small positive number by positive factor', () => {
    const expected = 3;
    const actual = divide(12, 4);
    expect(actual).toBe(expected);
  })

  test('can divide small positive number by positive number that is not a factor', () => {
    const expected = 3.25;
    const actual = divide(13, 4);
    expect(actual).toBe(expected);
  })

  test('can divide large numbers', () => {
    const expected = 600;
    const actual = divide(180_000, 300);
    expect(actual).toBe(expected);
  })

  test('can divide a positive and negative number', () => {
    const expected = -3;
    const actual = divide(-12, 4);
    expect(actual).toBe(expected);
  })

  test('can divide two negative numbers', () => {
    const expected = 3;
    const actual = divide(-12, -4);
    expect(actual).toBe(expected);
  })

  test("won't divide by zero", () => {
    const expected = "Can't divide by zero!";
    const actual = divide(10, 0);
    expect(actual).toBe(expected);
  })

  test('can divide zero', () => {
    const expected = 0;
    const actual = divide(0, 2);
    expect(actual).toBe(expected);
  })

});

describe('modulus', () => {

  test('can find small number modulo another small number', () => {
    const expected = 2;
    const actual = modulus(14, 4);
    expect(actual).toBe(expected);
  })

  test('can find large number modulo small number', () => {
    const expected = 1;
    const actual = modulus(1436, 7);
    expect(actual).toBe(expected);
  })

  test('can find large number modulo another large number', () => {
    const expected = 878;
    const actual = modulus(4162, 1642);
    expect(actual).toBe(expected);
  })

  test("won't take non-positive modulus", () => {
    const expected = "Modulus must be a positive integer!";
    const actual = modulus(10, -2);
    expect(actual).toBe(expected);
  })

  test('can find negative number modulo a positive number', () => {
    const expected = -4;
    const actual = modulus(-24, 5);
    expect(actual).toBe(expected);
  })

});

describe('even', () => {

  test("returns true for even numbers", () => {
    const expected = true;
    const actual = even(6);
    expect(actual).toBe(expected);
  })

  test("returns false for odd numbers", () => {
    const expected = false;
    const actual = even(7);
    expect(actual).toBe(expected);
  })

});

describe('odd', () => {

  test("returns true for odd numbers", () => {
    const expected = true;
    const actual = odd(11);
    expect(actual).toBe(expected);
  })

  test("returns false for odd numbers", () => {
    const expected = false;
    const actual = odd(4);
    expect(actual).toBe(expected);
  })

});
