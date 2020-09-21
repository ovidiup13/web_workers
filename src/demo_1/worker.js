// Web worker context

self.onmessage = (message) => {
  console.log('Worker: Received message from main thread.', message.data);

  postMessage('Hello from web worker!');
}
