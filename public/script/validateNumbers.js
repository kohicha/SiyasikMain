function validateNumericInput(event) {
    const input = event.target;
    const inputValue = input.value;
  
    // Use a regular expression to check if the input contains only numbers
    const numericRegex = /^[0-9]*$/;
  
    if (!numericRegex.test(inputValue)) {
      // If the input is not a number, remove the last entered character
      input.value = inputValue.slice(0, -1);
    }
  }