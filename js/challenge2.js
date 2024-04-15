// #1
const textarea = document.getElementById('billing');
console.log(textarea.value);

// #2 & 3
const checkbox = document.querySelector('input[name="useBilling"]');
const billingTextarea = document.getElementById('billing');
const homeTextarea = document.getElementById('home');

checkbox.addEventListener('click', function() {
  if (checkbox.checked) {
    homeTextarea.value = billingTextarea.value;
    homeTextarea.disabled = true;
  }
  else {
    homeTextarea.value = '';
    homeTextarea.disabled = false;
  }
});