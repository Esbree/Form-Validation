const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

emailInput.addEventListener('input', () => {
  if (emailInput.value.length < 5) {
    emailError.textContent = '';
  } else {
    emailError.textContent = '';
  }
});

const countryInput = document.getElementById('country');
const countryError = document.getElementById('countryError');

countryInput.addEventListener('input', () => {
  if (countryInput.value.length < 5) {
    countryError.textContent = '';
  } else {
    countryError.textContent = '';
  }
});
