const form = document.querySelector('.feedback-form');

function saveFormData(event) {
  event.preventDefault();
  
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedData) {
    form.elements.email.value = savedData.email;
    form.elements.message.value = savedData.message;
  }
}

populateForm();

form.addEventListener('input', saveFormData);

form.addEventListener('submit', event => {
  event.preventDefault();
  
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email && message) {
    console.log({ email, message });
    localStorage.removeItem('feedback-form-state');
    form.reset();
  }
});