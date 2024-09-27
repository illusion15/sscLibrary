document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input').value;
    const dateInput = document.getElementById('date-input').value;

    if (taskInput === '' || dateInput === '') {
        alert('Please enter task and date');
        return;
    }

    const task = {
        task: taskInput,
        date: dateInput,
    };

    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    addTaskToDOM(task, tasks.length - 1); // Add task with the correct index
    clearInputs();
    updateTaskCount(); // Update task count after adding a task
}

function addTaskToDOM(task, index) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.className = 'task-item';
    li.setAttribute('draggable', 'true'); // Make list item draggable
    li.dataset.index = index; // Add index as data attribute for reference

    const taskText = document.createElement('span');
    taskText.innerHTML = `${task.task} <br> ${task.date}`;

    const editButton = document.createElement('edit-button');
    editButton.innerHTML = `<span class="material-symbols-outlined">edit_note</span>Edit`;
    editButton.onclick = () => editTask(li, index);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeTask(li, index);

    li.appendChild(taskText);
    li.appendChild(editButton);
    li.appendChild(removeButton);

    taskList.appendChild(li);

    // Add drag-and-drop event listeners
    li.addEventListener('dragstart', dragStart);
    li.addEventListener('dragover', dragOver);
    li.addEventListener('drop', drop);
    li.addEventListener('dragend', dragEnd);
}

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.index);
    e.target.classList.add('dragging');
}

function dragOver(e) {
    e.preventDefault(); // Allow dropping
    const afterElement = getDragAfterElement(e.clientY);
    const taskList = document.getElementById('task-list');
    const draggingElement = document.querySelector('.dragging');
    
    if (afterElement == null) {
        taskList.appendChild(draggingElement);
    } else {
        taskList.insertBefore(draggingElement, afterElement);
    }
}

function drop(e) {
    e.preventDefault();
    const draggingElement = document.querySelector('.dragging');
    draggingElement.classList.remove('dragging');

    const draggedIndex = e.dataTransfer.getData('text/plain');
    const newIndex = Array.from(document.querySelectorAll('.task-item')).indexOf(draggingElement);

    // Update task order in localStorage
    let tasks = getTasksFromLocalStorage();
    const [movedTask] = tasks.splice(draggedIndex, 1); // Remove dragged task
    tasks.splice(newIndex, 0, movedTask); // Insert it at the new position
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function dragEnd() {
    const draggingElement = document.querySelector('.dragging');
    if (draggingElement) {
        draggingElement.classList.remove('dragging');
    }
}

function getDragAfterElement(y) {
    const draggableElements = [...document.querySelectorAll('.task-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function editTask(li, index) {
    const taskText = li.querySelector('span');
    const taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.value = taskText.innerHTML.split('<br>')[0].trim();

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.value = taskText.innerHTML.split('<br>')[1].trim();

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.onclick = () => saveTask(li, index, taskInput.value, dateInput.value);

    li.innerHTML = '';
    li.appendChild(taskInput);
    li.appendChild(dateInput);
    li.appendChild(saveButton);
}

function saveTask(li, index, updatedTask, updatedDate) {
    let tasks = getTasksFromLocalStorage();
    tasks[index] = { task: updatedTask, date: updatedDate };
    localStorage.setItem('tasks', JSON.stringify(tasks));
    li.innerHTML = `
        <span>${updatedTask} <br> ${updatedDate}</span>
        <edit-button onclick="editTask(this.parentElement, ${index})"><span class="material-symbols-outlined">edit_note</span>Edit</edit-button>
        <button onclick="removeTask(this.parentElement, ${index})">Remove</button>
    `;
}

function removeTask(li, index) {
    let confirmDelete = confirm("Are you sure you want to remove this task?");
    
    if (confirmDelete) {
        let tasks = getTasksFromLocalStorage();
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        li.remove();
        updateTaskCount(); // Update task count after removing a task
    }
}

function loadTasks() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach((task, index) => addTaskToDOM(task, index));
    updateTaskCount(); // Update task count after loading tasks
}

function getTasksFromLocalStorage() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function clearInputs() {
    document.getElementById('task-input').value = '';
    document.getElementById('date-input').value = '';
}

function updateTaskCount() {
    let listLength = document.querySelector(".list-length");
    let tasks = document.querySelectorAll("#task-list li"); // Select all <li> elements (tasks) in task-list
    listLength.innerText = `You completed ${tasks.length} task${tasks.length !== 1 ? 's' : ''}.`;
}

// ===================== Greeting ===============

// Check if the name is already saved in localStorage
let personName = localStorage.getItem('personName');

// If there's no name saved, prompt the user for their name
if (!personName) {
    personName = prompt("What's your name, dear?");
    localStorage.setItem('personName', personName); 
}

function doGreeting(){ //taken default name as Dear
    let myDate = new Date ();
    let hours = myDate.getHours();
    let heading = document.querySelector('.greeting');
    
    if (hours >= 4 && hours < 12 ){
        heading.innerText = `Good Morning, ${personName}`;
    } else if(hours >= 12 && hours < 18 ){
        heading.innerText = `Good Afternoon, ${personName}`;
    }else if(hours >= 18 && hours < 20 ){
        heading.innerText = `Good Evening, ${personName}`;
    }else{
        heading.innerText = `Good Night, ${personName}`;
    };
}

doGreeting();

// Get references to the audio element and the play/pause button
const audio = document.getElementById('myAudio');
const playPauseBtn = document.getElementById('playPauseBtn');

// Play/Pause toggle function
playPauseBtn.addEventListener('click', function () {
    if (audio.paused) {
        audio.play(); // Play the audio
        playPauseBtn.innerHTML = '<span class="material-symbols-outlined">volume_up</span>'; // Change button text to "Pause"
    } else {
        audio.pause(); // Pause the audio
        playPauseBtn.innerHTML = `<span class="material-symbols-outlined">volume_off</span>`; // Change button text to "Play"
    }
});


// ================= Clear Data warning ==================
  function cleardata(){
      let warn = prompt("Warning: It will erase your: \n(i) to-do tasks \n(ii) chapters completed checkbox. \n\nTo confirm that you want to delete, type: YES");
    if (warn === "YES"){
      localStorage.clear();
    }else{
      alert("Your data is safe");
    }
  }

// ================= right click disabling code ==================

  // Prevent copying using the clipboard event
  document.addEventListener('copy', function (event) {
      event.preventDefault();
      alert("Copying is disabled on this website.");
    });

    // Disable right-click on the entire page
    document.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    });


// ================= Code for subjectChoices onclick function ==================
function goToLink() {
      const selectElement = document.getElementById("subjectChoices");
      const selectedValue = selectElement.value;
      if (selectedValue) {
          window.location.href = selectedValue; // Redirect to the selected link
      }
  }

// ================= Code for resizing todo task list ==================
    function resizeTaskList() {
      const taskList = document.getElementById("task-list");

      // Check the current height or use the stored height
      if (taskList.style.height === "150px") {
          taskList.style.height = "auto"; // Revert back to tdefault height
          localStorage.setItem('task-list-height', 'auto');
      } else {
          taskList.style.height = "150px"; // Set height to 150px
          localStorage.setItem('task-list-height', '150px');
      }        
    }

    // Function to apply the saved height on page load
function setInitialTaskListHeight() {
    const taskList = document.getElementById("task-list");

    // Retrieve the saved height from localStorage
    const savedHeight = localStorage.getItem('task-list-height');

    // Apply the saved height if it exists, otherwise leave it as default
    if (savedHeight) {
        taskList.style.height = savedHeight;
    }
}

// Call the setInitialTaskListHeight function when the page loads
window.onload = setInitialTaskListHeight;

let unavilableNotes = document.querySelectorAll('notesAddress');  
  if(unavilableNotes == null){
    unavilableNotes[0].style.color = 'red';
}
