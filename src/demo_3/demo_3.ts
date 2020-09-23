import * as Comlink from 'comlink';
import { PromisedFibonnaciApi } from './api';

async function init() {
  console.log('initialising worker');
  const worker = new Worker('./worker.ts', { type: 'module' });

  console.log('constructing API');
  const api: PromisedFibonnaciApi = Comlink.wrap(worker);

  console.log('calculating stuff');
  console.log('calculate fib worker', await api.calculateFib(20));
  console.log('calculate memoised fib worker', await api.memoisedFib(100));
  console.log(
    'calculate fib and pass callback',
    await api.callbackFib(
      1000,
      Comlink.proxy(() => {
        console.log('Callback finished woo!!! OK now you die');
        worker.terminate();
      })
    )
  );
}

init();
