document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input').value;
    const dateInput = document.getElementById('date-input').value;

    if (taskInput === '' || dateInput === '') {
        alert('Please enter subject, task and date');
        return;
    }

    const task = {
        task: taskInput,
        date: dateInput,
    };

    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    addTaskToDOM(task);
    clearInputs();
}

function addTaskToDOM(task) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.className = 'task-item';

    li.innerHTML = `
        <span>${task.task} \n<br> ${task.date}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(li);
}

function removeTask(button) {
    const li = button.parentElement;
    // const taskText = li.firstChild.textContent.split(' - ')[1];
    // const dateText = li.firstChild.textContent.split(' - ')[2];

    let tasks = getTasksFromLocalStorage();
    // tasks = tasks.filter(task => task.task !== taskText || task.date !== dateText);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    li.remove();
}

function loadTasks() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => addTaskToDOM(task));
}

function getTasksFromLocalStorage() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}

function clearInputs() {
    document.getElementById('task-input').value = '';
    document.getElementById('date-input').value = '';
}

// Greeting h1

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
        playPauseBtn.innerHTML = '<span class="material-symbols-outlined">volume_up </span>'; // Change button text to "Pause"
    } else {
        audio.pause(); // Pause the audio
        playPauseBtn.innerHTML = `<span class="material-symbols-outlined">pause_circle</span>`; // Change button text to "Play"
    }
});