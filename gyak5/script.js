document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.textContent = taskText;

        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);
        taskInput.value = ""; 
    } else {
        alert("Kérlek írj be egy teendőt!");
    }
});
