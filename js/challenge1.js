window.addEventListener("load",function() {
  console.log(document.querySelector("h1"))
  document.querySelector("h1").classList.add("heading")
});

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

document.addEventListener('DOMContentLoaded', function() {
  const checkbox = document.querySelector('#toggle');
  const emailBox = document.querySelector('#email_input');

  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      emailBox.disabled = false;
    } else {
      emailBox.disabled = true;
    }
  });
});
