export function calculateFibonnaci(value) {
  if (value < 2) {
    return value;
  }

  return calculateFibonnaci(value - 1) + calculateFibonnaci(value - 2);
}
