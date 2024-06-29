const scriptURL = 'https://script.google.com/macros/s/AKfycbzMGRB2QzQTy4Tlw-RFU5wTvf7-BFHRoCxpc-ECvuuR7ziEDGekZjCMkNhQeHtvZXCu/exec'

const form = document.forms['attendance-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})