const scriptURL =
  'https://script.google.com/macros/s/AKfycbzMGRB2QzQTy4Tlw-RFU5wTvf7-BFHRoCxpc-ECvuuR7ziEDGekZjCMkNhQeHtvZXCu/exec';

const form = document.forms['attendance-form'];
const formMessages = document.getElementById('form-messages');
const loadingSpinner = document.getElementById('loading-spinner');
const submitButton = document.getElementById('submit');

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//   .then(response => alert("Thank you! your form is submitted successfully." ))
//   .then(() => { window.location.reload(); })
//   .catch(error => console.error('Error!', error.message))
// })

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Clear previous messages
  formMessages.innerHTML = '';

  // Show loading spinner
  loadingSpinner.style.display = 'block';
  // hide submit button
  submitButton.style.display = 'none';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // Hide loading spinner
      loadingSpinner.style.display = 'none';
      // Show submit button
      submitButton.style.display = 'block';

      if (response.ok) {
        // Display success message
        formMessages.style.display = 'block';
        formMessages.innerHTML =
          '<br><p style="color: #acbf69;">Thank you! Your reservation has been submitted successfully.</p>';
        form.reset();
      } else {
        // Display error message
        formMessages.style.display = 'block';
        formMessages.innerHTML =
          '<br><p style="color: #c30010;;">Oops! There was a problem with your submission. Please try again later.</p>';
      }
      // Clear messages after 5 seconds
      setTimeout(() => {
        formMessages.innerHTML = '';
        formMessages.style.display = 'none';
      }, 5000); // Adjust the delay (in milliseconds) as needed
    })
    .catch((error) => {
      // Hide loading spinner
      loadingSpinner.style.display = 'none';
      // Show submit button
      submitButton.style.display = 'block';

      // Display error message
      formMessages.style.display = 'block';
      formMessages.innerHTML = `<br><p style="color: #c30010;;">Error! ${error.message}</p>`;
      // Clear messages after 5 seconds
      setTimeout(() => {
        formMessages.innerHTML = '';
        formMessages.style.display = 'none';
      }, 5000); // Adjust the delay (in milliseconds) as needed
    });
});
