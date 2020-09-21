import { toggleLoading, showResult, hideResult } from './utils';

const worker = new Worker('./worker.js', { type: 'module' });
const sendToWorker = (data) => worker.postMessage(data);

const form = document.getElementById('form');

const calculateWorkerButton = document.getElementById('worker');
calculateWorkerButton.addEventListener('click', (event) => {
  event.preventDefault();
  hideResult();
  const value = form.elements[0].value;
  sendToWorker({
    type: 'CALCULATE_FIBONNACI',
    value,
  });
});

const receiveFromWorker = (message) => {
  const data = message.data;
  console.log('Main: received message from worker', data);
  switch (data.type) {
    case 'PROCESSING':
      toggleLoading(true);
      break;
    case 'CALCULATE_FIBONNACI_RESULT':
      toggleLoading(false);
      showResult(data.result);
      break;
    default:
      break;
  }
}

worker.onmessage = receiveFromWorker;
