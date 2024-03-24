// password validation
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('passwordError');

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'at least 6 characters';
  } else {
    passwordError.textContent = '';
  }
});
