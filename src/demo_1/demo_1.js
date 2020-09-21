const worker = new Worker('./worker.js', { type: 'module' });

worker.postMessage('hello from main thread!');
worker.onmessage = (message) => {
  console.log('Received response from worker:', message.data);
}
