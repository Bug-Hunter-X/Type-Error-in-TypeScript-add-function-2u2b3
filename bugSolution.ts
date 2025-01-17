function add(a: number, b: number): number {
  return a + b;
}

function addString(a: string, b: string): string {
  return a + b;
}

function add(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else {
    return 0; // Or throw an error
  }
}

let result1 = add(10, 20); // Correct
let result2 = add("hello", "world"); // Correct
let result3 = add(10, "world"); // Correct