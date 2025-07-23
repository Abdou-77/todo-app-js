// Dark Mode Toggle Functionality
// ✅ USER'S WORK - Complete dark mode implementation with smooth animations
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

// ✅ USER'S WORK - DOM element selection and basic structure
const add_button = document.getElementById('TODO-BUTTON');

const input_value = document.getElementById('TODO-input');

const todo_list = document.getElementById('todo-list');

// ✅ USER'S WORK - Event listener setup and basic logic structure
// 🔧 HELPER ADDITIONS - Enhanced with validation, date/time, proper HTML structure
function add_item() {
    const value = input_value.value;
    const clean_text = value.trim(); // ✅ USER'S WORK - Text cleaning
    
    // 🔧 HELPER ADDITION - Empty validation
    // Don't add empty todos
    if (clean_text === '') {
        return;
    }
    
    const li_todo = document.createElement("li"); // ✅ USER'S WORK - Element creation
    
    // 🔧 HELPER ADDITION - Date and time functionality
    // Get today's date and time
    const today = new Date();
    const dateString = today.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
    });
    const timeString = today.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    
    // 🔧 HELPER ADDITION - Unique ID generation
    // Create unique ID for this todo
    const todoId = `todo-${Date.now()}`;
    
    // ✅ USER'S WORK (CONCEPT) - Setting innerHTML content
    // 🔧 HELPER ENHANCEMENT - Enhanced with checkbox, label, date/time structure, delete button
    // Create the HTML with checkbox, text, date and time
    li_todo.innerHTML = `
        <input type="checkbox" id="${todoId}">
        <label for="${todoId}">${clean_text}</label>
        <span class="todo-date">${dateString} at ${timeString}</span>
        <button class="delete-btn" aria-label="Delete todo">×</button>
    `;
    
    // 🔧 HELPER ADDITION - Delete functionality with fade animation
    const deleteBtn = li_todo.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        li_todo.classList.add('fade-out');
        setTimeout(() => {
            li_todo.remove();
        }, 300); // Match the CSS animation duration
    });
    
    todo_list.append(li_todo); // ✅ USER'S WORK - Appending to list
    
    // 🔧 HELPER ADDITION - Input clearing for better UX
    // Clear input
    input_value.value = '';
}

// ✅ USER'S WORK - Event listener setup
// 🔧 HELPER FIX - Corrected function reference (removed parentheses)
add_button.addEventListener("click", add_item);

input_value.addEventListener("keydown", (e) => {
    if (e.key === "Enter") add_item();
});

