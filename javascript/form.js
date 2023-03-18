const form = document.querySelector('form');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
  let errors = [];

  // Validate email
  const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(email.value)) {
    errors.push('Invalid email format');
  }

  //Display error
  if (errors.length > 0) {
    e.preventDefault();
    displayErrors(errors);
  }
});

function displayErrors(errors) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  const errorList = document.createElement('ul');
  errors.forEach((error) => {
    const errorItem = document.createElement('li');
    errorItem.textContent = error;
    errorList.appendChild(errorItem);
  });
  errorDiv.appendChild(errorList);
  form.insertBefore(errorDiv, phone.nextSibling);
}





