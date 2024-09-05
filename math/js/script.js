// JavaScript function to display different sections
function showSection(section) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(s => {
      s.style.display = 'none';  // Hide all sections
  });
  
  document.getElementById(section).style.display = 'block';  // Show the selected section
}
