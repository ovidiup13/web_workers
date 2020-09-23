export interface FibonnaciApi {
  calculateFib: (n: number) => number;
  memoisedFib: (n: number) => number;
}

export interface PromisedFibonnaciApi {
  calculateFib: (n: number) => Promise<number>;
  memoisedFib: (n: number) => Promise<number>;
}
