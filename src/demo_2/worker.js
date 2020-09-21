import { calculateFibonnaci } from './fibonnaci';

const receiveMessage = (message) => {
  const data = message.data;
  console.log('worker: received message', message.data);

  switch (data.type) {
    case 'CALCULATE_FIBONNACI':
      sendBack({ type: 'PROCESSING' }),
      sendBack({
        type: 'CALCULATE_FIBONNACI_RESULT',
        result: calculateFibonnaci(data.value),
      });
      break;
    default:
      return;
  }
}

self.onmessage = receiveMessage;
const sendBack = (data) => postMessage(data);
