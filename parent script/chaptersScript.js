const elementsWithClassAndOnclick = document.querySelectorAll('.chapter-card[onclick]');
elementsWithClassAndOnclick.forEach(element => {
  element.style.backgroundColor = '#dcd8f8';
});

// Get the unique identifier for the current page (use a page-specific identifier, e.g., the page's filename or ID)
const pageId = window.location.pathname; // This will return something like '/page1.html'

// Function to toggle the textarea visibility for the specific note
function openTextArea(buttonElement) {
  const noteDiv = buttonElement.closest('.addNote');
  const textAreaElement = noteDiv.querySelector('.noteArea');
  const displayStyle = window.getComputedStyle(textAreaElement).display;

  if (displayStyle === 'none') {
    textAreaElement.style.display = 'inline-flex';  // Show the textarea
    buttonElement.innerText = "Hide note";
  } else {
    textAreaElement.style.display = 'none';  // Hide the textarea
    buttonElement.innerText = "Add note";
  }
}

// Function to save the textarea content to localStorage (individual notes per page)
function saveNoteForTextArea(textAreaElement, index) {
  const noteContent = textAreaElement.value;
  localStorage.setItem(`${pageId}_noteContent_${index}`, noteContent);  // Save each note with a key specific to the page and index
}

// Load the textarea content from localStorage when the page loads
function loadNote() {
  const noteDivs = document.querySelectorAll('.addNote');
  noteDivs.forEach((noteDiv, index) => {
    const textAreaElement = noteDiv.querySelector('.noteArea');
    
    // Load the note content from localStorage for each textarea on the current page
    const savedNote = localStorage.getItem(`${pageId}_noteContent_${index}`);
    if (savedNote) {
      textAreaElement.value = savedNote;
    }
    
    // Attach the 'input' event listener to save changes to localStorage
    textAreaElement.addEventListener('input', () => {
      saveNoteForTextArea(textAreaElement, index);
    });
  });
}

// Load the notes when the page is loaded
window.addEventListener('load', loadNote);
