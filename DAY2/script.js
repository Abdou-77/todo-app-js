// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
    
    // Toggle theme on button click with smooth animation
    themeToggle.addEventListener('click', function() {
        // Add transition class for smooth animation
        body.classList.add('theme-transitioning');
        
        // Toggle dark mode
        body.classList.toggle('dark-mode');
        
        // Save theme preference
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        
        // Remove transition class after animation completes
        setTimeout(() => {
            body.classList.remove('theme-transitioning');
        }, 600);
    });
});

// Todo App Functionality (placeholder for future implementation)
// Add your todo logic here

//⬆ all the thing above are ai this for you to know my code

const add_button = document.getElementById('TODO-BUTTON');

const input_value = document.getElementById('TODO-input');

const todo_list = document.getElementById('todo-list');

add_button.addEventListener("click", function() {
    const value = input_value.value;
    const clean_text = value.trim();
    
    // Don't add empty todos
    if (clean_text === '') {
        return;
    }
    
    const li_todo = document.createElement("li");
    
    // Get today's date
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    });
    
    // Create unique ID for this todo
    const todoId = `todo-${Date.now()}`;
    
    // Create the HTML with checkbox, text, and date
    li_todo.innerHTML = `
        <input type="checkbox" id="${todoId}">
        <label for="${todoId}">${clean_text}</label>
        <span class="todo-date">${dateString}</span>
    `;
    
    todo_list.append(li_todo);
    
    // Clear input
    input_value.value = '';
});

