var StoredTodoString = localStorage.getItem("todos");
//Get the stored todos string from local storage

var todosArray = JSON.parse(StoredTodoString) || [];

if (todosArray.length > 0) {
    todosArray.forEach(task => {
        addToList(task);
    });
}

document.getElementById("submit").addEventListener('click',
    function (event) {
        event.preventDefault();

        const task = document.getElementById("task").value.trim();

        if (task) {
            todosArray.push(task);
            localStorage.setItem('todos', JSON.stringify(todosArray));
            addToList(task);
            document.getElementById('task').value = '';
        }
    }
);

// console.log(typeof todosArray);

function addToList(new_task) {
    const li = document.createElement('li');
    li.textContent = new_task;

    document.getElementById('list').appendChild(li);
    //add new li to ul
}

document.querySelectorAll('li').forEach(
    function (li) {
        li.addEventListener('click', function () {
            this.style.textDecoration = 'line-through';
        })
    }
);

document.querySelectorAll('li').forEach(
    function (li, i) {
        li.addEventListener('click', function (i) {
            todosArray.splice(i,1,);
            localStorage.setItem('todos', JSON.stringify(todosArray));
        });
    }
);

