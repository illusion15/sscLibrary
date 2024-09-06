
// Function to initialize checkboxes' state from localStorage
function initializeCheckboxes() {
  // Get all the checkboxes
  const checkboxes = document.querySelectorAll('.myCheckbox');
  // Loop through each checkbox
  checkboxes.forEach(function(checkbox) {
    const checkboxId = checkbox.id;  // Get unique ID for each checkbox
    // Retrieve the saved state from localStorage
    const savedState = localStorage.getItem(checkboxId);
    // Set the checkbox state based on the saved value
    if (savedState === 'checked') {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });
}
// Function to update the checkbox state in localStorage
function setupCheckboxListeners() {
  // Get all the checkboxes
  const checkboxes = document.querySelectorAll('.myCheckbox');
  // Add event listeners to each checkbox
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      const checkboxId = checkbox.id;  // Get unique ID for each checkbox
      if (checkbox.checked) {
        localStorage.setItem(checkboxId, 'checked');
      } else {
        localStorage.setItem(checkboxId, 'unchecked');
      }
    });
  });
}
// Initialize the checkboxes state on page load
initializeCheckboxes();
// Setup event listeners for checkboxes
setupCheckboxListeners();