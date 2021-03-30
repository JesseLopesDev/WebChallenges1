const loginForm = document.querySelector('#login-form');

let inputValues = document.querySelectorAll('.fieldset__input');
let errorMessages = document.querySelectorAll('.is-error-message');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  printErrorMessage();
  resetForm();
});

function printErrorMessage() {
  for (let i = 0; i < inputValues.length; i++) {
    
    for (let j = 0; j < errorMessages.length; j++) {
      let withoutErrorMessages = true;
      
      let inputs = inputValues[i];
      let messages = errorMessages[i];

      if (inputs.value === '') {
        messages.textContent = 'This field is required!';
        messages.classList.add('is-invalid-value');
        messages.setAttribute('tabindex', '0');
        messages.setAttribute('role', 'alert');
        inputs.classList.add('is-invalid-input');
        inputs.classList.add('is-exclamation-icon');
        withoutErrorMessages = false;
      }

      if (withoutErrorMessages) {
        messages.textContent = '';
        messages.classList.remove('is-invalid-value');
        inputs.classList.remove('is-invalid-input');
        inputs.classList.remove('is-exclamation-icon');
      }
    }
  }
}

function resetForm() {
  let inputs = document.querySelectorAll('.fieldset__input');
  
  for (let i = 0; i < inputs.length; i++) {
    
    for (let j = 0; j < inputValues.length; j++) {
      const email = document.querySelector('#email');
      const password = document.querySelector('#password');

      let resetForm = true;

      if (email.value === '') {
        resetForm = false;
      }

      if (password.value === '') {
        resetForm = false;
      }

      if (resetForm) {
        loginForm.submit();
        loginForm.reset();
      }
    }
  }
}

function clearMessages() {
  for (let i = 0; i < errorMessages.length; i++) {
    let error = document.querySelectorAll('.is-error');

    for (let j = 0; j < error.length; j++) {
      let inputs = inputValues[i];
      let messages = errorMessages[i];

      messages.textContent = '';
      messages.classList.remove('is-invalid-value');
      messages.removeAttribute('tabindex', '0');
      messages.removeAttribute('role', 'alert');
      inputs.classList.remove('is-invalid-input');
      inputs.classList.remove('is-exclamation-icon');
    }
  }
}