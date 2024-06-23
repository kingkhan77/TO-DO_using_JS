var StoredTodoString = localStorage.getItem("todos");
//Get the stored todos string from local storage

let todos = [];

todos = JSON.parse(StoredTodoString) || [];
//parse the string to get the actual stored todos array
// OR DIRECTLY ---- var todos = JSON.parse(localStorage.getItem("todos")) || [] ;

if(todos.length > 0){
    todos.forEach(task => {
        addTOList(task);
    });
}

 document.getElementById("submit").addEventListener('click',
    function(event){
        event.preventDefault();

        const task = document.getElementById("task").value.trim();
        console.log(typeof task);
        if(task){
            todos.push(task);
            console.log(todos);
            localStorage.setItem('todos', JSON.stringify(todos));
            addTOList(task);
            document.getElementById('task').value = '';
        }
    }
);

console.log(typeof todos);

function addTOList(new_task){
    const li = document.createElement('li');
    li.textContent = new_task;
    
    document.getElementById('list').appendChild(li);
    //add new li to ul
}