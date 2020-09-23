import * as Comlink from 'comlink';
import { FibonnaciApi } from './api';

/**
 * Unoptimised fibonnaci function. Super slow 🐌
 */
function calculateFib(n: number): number {
  if (n < 2) {
    return n;
  }

  return calculateFib(n - 1) + calculateFib(n - 2);
}

/**
 * Memoised fibonnaci function. Super fast 🐇
 */
function memoisedFib(n: number): number {
  console.log('worker: calculate memoised fib', n);
  const memo: { [k: string]: number } = {
    '0': 1,
    '1': 1,
    '2': 2,
  };

  const calcFib = (f: number): number => {
    if (f in memo) {
      return memo[f];
    }

    const result = calcFib(f - 1) + calcFib(f - 2);
    memo[f] = result;
    return result;
  };

  return calcFib(n);
}

function callbackFib(n: number, callback: () => void): void {
  const fib = memoisedFib(n);
  callback();
}

//=======================================

const fibonnaciApi: FibonnaciApi = {
  calculateFib,
  memoisedFib,
  callbackFib,
};

Comlink.expose(fibonnaciApi);
