document.addEventListener('DOMContentLoaded', loadTasks);
document.getElementById('add-task-button').addEventListener('click', addTask);

function addTask() {
    const subjectInput = document.getElementById('subjectChoices').value;
    const taskInput = document.getElementById('task-input').value;
    const dateInput = document.getElementById('date-input').value;

    if (subjectInput === '' || taskInput === '' || dateInput === '') {
        alert('Please enter subject, task and date');
        return;
    }

    const task = {
        subject: subjectInput,
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
        <span>${task.subject} \n<br> ${task.task} \n<br> ${task.date}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(li);
}

function removeTask(button) {
    const li = button.parentElement;
    const subjectText = li.firstChild.textContent.split(' - ')[0];
    const taskText = li.firstChild.textContent.split(' - ')[1];
    const dateText = li.firstChild.textContent.split(' - ')[2];

    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(task => task.subject !== subjectText || task.task !== taskText || task.date !== dateText);
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
    document.getElementById('subjectChoices').value = '';
    document.getElementById('task-input').value = '';
    document.getElementById('date-input').value = '';
}