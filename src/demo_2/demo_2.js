import { calculateFibonnaci } from './fibonnaci';
import { toggleLoading, showResult } from './utils';

const form = document.getElementById('form');

const calculateHereButton = document.getElementById('here');
calculateHereButton.addEventListener('click', (event) => {
  event.preventDefault();

  toggleLoading(true);
  const result = calculateFibonnaci(form.elements[0].value);
  showResult(result);
  toggleLoading(false);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
}, true);