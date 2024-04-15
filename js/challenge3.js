// #1
const caption = document.querySelector('#thumbs figure:nth-child(2) figcaption');
alert(caption.textContent);

// #2 & 3

// Get all thumbnail images and the display element
const thumbnails = document.querySelectorAll('#thumbs .thumbnail');
const display = document.getElementById('display');

// Add a mouseover event listener to each thumbnail image
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('mouseover', () => {
    // Set the background image of the display to the hovered image
    display.style.backgroundImage = `url(${thumbnail.src})`;

    // Set the text of the display to the alt attribute of the hovered image
    display.textContent = thumbnail.alt;

    // Hide the hovered image by setting its visibility to hidden
    thumbnail.style.visibility = 'hidden';
  });

  // Add a mouseout event listener to each thumbnail image
  thumbnail.addEventListener('mouseout', () => {
    // Reset the background image and text of the display
    display.style.backgroundImage = '';
    display.textContent = '';

    // Show the thumbnail image by setting its visibility to visible
    thumbnail.style.visibility = 'visible';
  });
});

// Add a mouseout event listener to the display element
display.addEventListener('mouseout', () => {
  // Reset the background image and text of the display
  display.style.backgroundImage = '';
  display.textContent = '';

  // Show all thumbnail images by setting their visibility to visible
  thumbnails.forEach(thumbnail => {
    thumbnail.style.visibility = 'visible';
  });
});


