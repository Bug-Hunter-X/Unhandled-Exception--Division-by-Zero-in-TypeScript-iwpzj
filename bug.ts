function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

const result = add(5, 3); // result = 8
const result2 = subtract(10, 4); // result2 = 6
const result3 = multiply(7, 2); // result3 = 14
const result4 = divide(20, 0); // Throws an error