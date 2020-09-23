export interface FibonnaciApi {
  calculateFib: (n: number) => number;
  memoisedFib: (n: number) => number;
  callbackFib: (n: number, callback: () => void) => void;
}

export interface PromisedFibonnaciApi {
  calculateFib: (n: number) => Promise<number>;
  memoisedFib: (n: number) => Promise<number>;
  callbackFib: (n: number, callback: () => void) => Promise<void>;
}
