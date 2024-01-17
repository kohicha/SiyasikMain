const minusButton = document.querySelector('.subtractInput');
const plusButton = document.querySelector('.addInput');
const quantityInput = document.querySelector('.numInput');

minusButton.addEventListener('click', () => {
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 1) {
    quantityInput.value = currentQuantity - 1;
  }
});

plusButton.addEventListener('click', () => {
  let currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1;
});