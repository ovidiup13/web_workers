export const toggleLoading = (state) => {
  const loading = document.querySelector('#loading');
  loading.style.display = state ? 'block' : 'none';
}

export const showResult = (value) => {
  const result = document.querySelector('#result');

  result.innerText = `Result is: ${value}`;
  result.style.display = 'block';
}

export const hideResult = () => {
  const result = document.querySelector('#result');

  result.style.display = 'none';
  result.innerText = '';
}