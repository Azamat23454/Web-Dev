document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            li.classList.toggle('done');
        });
        
        const span = document.createElement('span');
        span.textContent = taskText;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="bi bi-trash"></i>'; 
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
        
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteButton);
        document.getElementById('task-list').appendChild(li);
        
        taskInput.value = '';
    }
});