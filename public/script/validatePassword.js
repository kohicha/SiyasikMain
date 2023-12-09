function isPasswordValid(password) {
    const minLength = 8;
    const maxLength = 16;
  
    // Check if the password meets the length criteria
    const isLengthValid = password.length >= minLength && password.length <= maxLength;
  
    // Check if the password contains at least one uppercase letter
    const hasUppercase = /[A-Z]/.test(password);
  
    // Check if the password contains at least one lowercase letter
    const hasLowercase = /[a-z]/.test(password);
  
    // Check if the password contains at least one number
    const hasNumber = /\d/.test(password);
  
    // All conditions must be true for the password to be considered valid
    return isLengthValid && hasUppercase && hasLowercase && hasNumber;
  }
  
  function isEmailValid(email) {
    // Basic email pattern matching
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }


  
document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const error = document.getElementById('errorMessage')
    if (isPasswordValid(password)) {
      error.textContent = ''
      this.classList.remove('focus:border-red-700')
      this.classList.add('focus:border-black')
    } else {
      error.textContent = "Invalid Password!"
      this.classList.add('focus:border-red-700')
      this.classList.remove('focus:border-black')
    }
});

