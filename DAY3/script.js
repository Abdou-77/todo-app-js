document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.add('theme-transitioning');
        body.classList.toggle('dark-mode');
        
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        
        setTimeout(() => {
            body.classList.remove('theme-transitioning');
        }, 600);
    });
    
    // Load existing todos
    loadTodos();
});

const add_button = document.getElementById('TODO-BUTTON');
const input_value = document.getElementById('TODO-input');
let todo_list = document.getElementById('todo-list');
const clear_all_btn = document.getElementById('clear-all-btn');

function addTodo() {
    const value = input_value.value;
    const clean_text = value.trim();
    
    if (clean_text === '') {
        return;
    }
    
    // Get existing todos from localStorage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    // Create new todo object
    const newTodo = {
        id: Date.now(),
        text: clean_text,
        completed: false,
        dateCreated: new Date().toISOString()
    };
    
    // Add to todos array and save to localStorage
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    
    // Clear input and reload todos
    input_value.value = '';
    loadTodos();
}

function loadTodos() {
    todo_list.innerHTML = '';
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    todos.forEach(todo => {
        createTodoElement(todo);
    });
}

function createTodoElement(todo) {
    const li_todo = document.createElement("li");
    li_todo.setAttribute('data-id', todo.id);
    
    // Format date
    const date = new Date(todo.dateCreated);
    const dateString = date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    });
    const timeString = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    
    const todoId = `todo-${todo.id}`;
    
    li_todo.innerHTML = `
        <input type="checkbox" id="${todoId}" ${todo.completed ? 'checked' : ''}>
        <label for="${todoId}">${todo.text}</label>
        <span class="todo-date">${dateString} at ${timeString}</span>
        <button class="delete-btn" aria-label="Delete todo">×</button>
    `;
    
    if (todo.completed) {
        li_todo.classList.add('completed');
    }
    
    // Add event listeners
    const checkbox = li_todo.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
        toggleTodo(todo.id);
    });
    
    const deleteBtn = li_todo.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        deleteTodo(todo.id);
    });
    
    todo_list.appendChild(li_todo);
}

function toggleTodo(id) {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    
    const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            return { ...todo, completed: !todo.completed };
        }
        return todo;
    });
    
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    loadTodos();
}

function deleteTodo(id) {
    const todoElement = document.querySelector(`[data-id="${id}"]`);
    todoElement.classList.add('fade-out');
    
    setTimeout(() => {
        const todos = JSON.parse(localStorage.getItem('todos')) || [];
        const updatedTodos = todos.filter(todo => todo.id !== id);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        loadTodos();
    }, 300);
}

function clearAllTodos() {
    const todos = todo_list.querySelectorAll('li');
    todos.forEach(todo => {
        todo.classList.add('fade-out');
    });
    
    setTimeout(() => {
        localStorage.removeItem('todos');
        loadTodos();
    }, 300);
}

// Event listeners
add_button.addEventListener("click", addTodo);

input_value.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTodo();
});

clear_all_btn.addEventListener("click", clearAllTodos);