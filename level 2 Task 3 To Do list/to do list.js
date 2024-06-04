document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTask');
    const pendingList = document.getElementById('pendingList');
    const completedList = document.getElementById('completedList');

    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            li.addEventListener('click', function() {
                if (this.parentNode === pendingList) {
                    this.parentNode.removeChild(this);
                    completedList.appendChild(this);
                } else {
                    this.parentNode.removeChild(this);
                    pendingList.appendChild(this);
                }
            });
            pendingList.appendChild(li);
            taskInput.value = '';
        }
    });
});