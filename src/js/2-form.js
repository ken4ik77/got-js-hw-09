const formData = { email: '', message: '', }; const form =
document.querySelector('.feedback-form'); form.addEventListener('input', e => {
const { name, value } = e.target; formData[name] = value;
localStorage.setItem('feedback-form-state', JSON.stringify(formData)); }); const
savedData = localStorage.getItem('feedback-form-state'); if (savedData) { const
parsedData = JSON.parse(savedData); formData.email = parsedData.email || '';
formData.message = parsedData.message || '';
form.querySelector('[name="email"]').value = formData.email;
form.querySelector('[name="message"]').value = formData.message; }
form.addEventListener('submit', e => { e.preventDefault(); const email =
form.querySelector('[name="email"]').value.trim(); const message =
form.querySelector('[name="message"]').value.trim(); if (email === '' || message
=== '') { alert('Fill please all fields'); return; } formData.email = email;
formData.message = message; console.log(formData);
localStorage.removeItem('feedback-form-state'); formData.email = '';
formData.message = ''; form.reset(); });
