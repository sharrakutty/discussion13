// #1
window.addEventListener("load",function() {
  console.log(document.querySelector("h1"))
  document.querySelector("h1").classList.add("heading")
});

// #2
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('dblclick', function() {
    const date = new Date();
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateString = date.toLocaleString('en-US', options);
    const timeZone = '(Eastern Standard Time)';
    const formattedDate = `${dateString} ${timeZone}`;
    console.log(formattedDate);
    alert(formattedDate);
  });
});

// #3
const checkbox = document.getElementById('toggle');
const emailBox = document.getElementById('emailBox');

checkbox.addEventListener('click', function() {
  if (checkbox.checked) {
    emailBox.classList.remove('hidden');
  }
  else {
    emailBox.classList.add('hidden');
  }
});