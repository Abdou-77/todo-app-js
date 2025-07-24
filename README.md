# Todo App 📝

A modern, responsive todo application built with vanilla JavaScript, HTML, and CSS. Features a beautiful UI with dark/light theme toggle, persistent data storage, and smooth animations.

## ✨ Features

- **Add Todos**: Create new tasks with a simple input field
- **Mark as Complete**: Check off completed tasks with intuitive checkboxes
- **Delete Tasks**: Remove individual tasks with a delete button
- **Clear All**: Remove all tasks at once
- **Dark/Light Theme**: Toggle between light and dark modes with smooth transitions
- **Persistent Storage**: Tasks and theme preferences are saved in localStorage
- **Timestamps**: Each task displays creation date and time
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Smooth Animations**: Beautiful fade-in/fade-out effects and hover animations

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with flexbox, gradients, and animations
- **Vanilla JavaScript**: DOM manipulation and localStorage integration
- **LocalStorage API**: Data persistence across browser sessions

## 📁 Project Structure

```
todo-app-js/
├── index.html          # Main HTML structure
├── style.css           # Styling and theme definitions
├── script.js           # JavaScript functionality
```

## 🎨 Design Features

### Light Theme
- Clean, minimal design with soft gradients
- Subtle shadows and glass-morphism effects
- Professional color palette with blue accents

### Dark Theme
- Elegant dark interface with purple accents
- Smooth theme transitions with custom animations
- Eye-friendly colors for extended use

### Animations
- Fade-out effects when deleting tasks
- Hover animations on interactive elements
- Smooth theme transition animations
- Scale and transform effects on buttons

## 🔧 Installation & Usage

1. **Clone or download** the project files
2. **Open** `index.html` in your web browser
3. **Start adding tasks** and enjoy the app!

No build process or dependencies required - it's pure vanilla JavaScript!

## 💡 How to Use

### Adding a Todo
1. Type your task in the input field
2. Click the "+" button or press Enter
3. Your task appears in the list with a timestamp

### Completing a Todo
- Click the checkbox next to any task to mark it as complete
- Completed tasks will have a strikethrough effect

### Deleting a Todo
- Hover over a task to reveal the delete button (×)
- Click the delete button to remove the task with a fade animation

### Theme Toggle
- Click the sun/moon icon in the header to switch themes
- Your preference is automatically saved

### Clear All
- Click the "Clear All" button to remove all tasks at once
- Useful for starting fresh or cleaning up completed tasks

## 🔄 Data Persistence

The app uses the browser's localStorage to save:
- All your todo items
- Task completion status
- Theme preference (light/dark)
- Task creation timestamps

Your data persists between browser sessions and page refreshes.

## 📱 Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🎯 Key JavaScript Functions

- `addTodo()`: Creates and saves new tasks
- `loadTodos()`: Retrieves and displays saved tasks
- `toggleTodo()`: Handles task completion status
- `deleteTodo()`: Removes individual tasks
- `clearAllTodos()`: Removes all tasks
- Theme toggle functionality with smooth transitions

## 🎨 CSS Highlights

- **CSS Grid & Flexbox**: Modern layout techniques
- **Custom Properties**: For theme color management
- **Smooth Transitions**: Using cubic-bezier timing functions
- **Glass-morphism**: Backdrop blur effects
- **Gradient Backgrounds**: Beautiful color combinations
- **Box Shadows**: Depth and elevation effects

## 🌟 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

Requires modern browser with localStorage support.

## 🚀 Future Enhancements

Potential features for future versions:
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Task priority levels
- [ ] Search and filter functionality
- [ ] Task editing capability
- [ ] Export/import functionality
- [ ] Drag and drop reordering
- [ ] Task notes/descriptions

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements. Some areas where contributions are welcome:

- Bug fixes
- UI/UX improvements
- New features
- Code optimization
- Documentation improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Created with ❤️ by Abdellah Sofi

---

**Enjoy organizing your tasks with this beautiful todo app!** ✅
