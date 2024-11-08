document.addEventListener("DOMContentLoaded", function() {
  const coursesContainer = document.getElementById("courses");

  // Sample course data
  const courses = [
    { title: "JavaScript Basics", progress: "50%" },
    { title: "HTML & CSS Fundamentals", progress: "75%" },
    { title: "React for Beginners", progress: "20%" }
  ];

  // Render courses
  courses.forEach(course => {
    const courseElement = document.createElement("div");
    courseElement.className = "course";
    courseElement.innerHTML = `
      <h3>${course.title}</h3>
      <p>Progress: ${course.progress}</p>
    `;
    coursesContainer.appendChild(courseElement);
  });
});

function logout() {
  alert("Logging out...");
  // Add logout logic here
}


