const minusButton = document.querySelector('.relative button:first-of-type');
const plusButton = document.querySelector('.relative button:last-of-type');
const quantityInput = document.querySelector('.relative input');

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