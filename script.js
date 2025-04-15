// Select DOM elements by their IDs
const changeTextBtn = document.getElementById('changeTextBtn');  // Selects the "Change Text" button
const changeStyleBtn = document.getElementById('changeStyleBtn');  // Selects the "Change Style" button
const addElementBtn = document.getElementById('addElementBtn');  // Selects the "Add Element" button
const textElement = document.getElementById('text');  // Selects the paragraph element to be manipulated

// Function to change text content dynamically when "Change Text" button is clicked
changeTextBtn.addEventListener('click', () => {
  textElement.textContent = "The text has been changed! JavaScript is amazing!";  // Changes the text content of the paragraph
});

// Function to modify CSS styles via JavaScript when "Change Style" button is clicked
changeStyleBtn.addEventListener('click', () => {
  textElement.style.color = 'blue';  // Changes the text color to blue
  textElement.style.fontSize = '20px';  // Sets the font size to 20px
  textElement.style.fontFamily = 'Arial, sans-serif';  // Changes the font family to Arial
});

// Function to add a new element to the DOM when "Add Element" button is clicked
addElementBtn.addEventListener('click', () => {
  const newElement = document.createElement('p');  // Creates a new <p> (paragraph) element
  newElement.textContent = "A new paragraph has been added!";  // Sets the text of the new paragraph
  document.body.appendChild(newElement);  // Adds the new paragraph to the body of the HTML document
});
