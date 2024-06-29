import { todoRepository } from './TodoRepository/repository.js';

const today = new Date();

// Extract day, month, and year
const date = today.getDate();
const monthIndex = today.getMonth();
const year = today.getFullYear();
const dayIndex = today.getDay();

function getMonthName(monthIndex) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[monthIndex].toUpperCase();
}

// Function to get the day of the week name
function getDayName(dayIndex) {
    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    return dayNames[dayIndex].toUpperCase();
}

document.getElementById('date').textContent = date;
document.getElementById('month').textContent = getMonthName(monthIndex);
document.getElementById('year').textContent = year;
document.getElementById('day').textContent = getDayName(dayIndex);

todoRepository.renderTodoList();

document.getElementById("submit").addEventListener('click',
    function (event) {
        event.preventDefault();
        const new_task = document.getElementById("task").value.trim();

        if (new_task) {
            todoRepository.addTask(new_task);
        }

    }
);
