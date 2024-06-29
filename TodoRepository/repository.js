const todoRepository = {
    todosArray: JSON.parse(localStorage.getItem('todos')) || [],

    generateUUID: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    addTask: function (new_task) {
        this.todosArray.push({ id: this.generateUUID(), task: new_task, is_marked_done: false });
        this.saveTodos();
        this.renderTodoList();
        document.getElementById('task').value = '';
    },

    saveTodos: function () {
        localStorage.setItem('todos', JSON.stringify(this.todosArray));
    },

    getStoredTodos: function () {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    },

    deleteTask: function (taskId) {
        this.todosArray = this.todosArray.filter(todo => todo.id !== taskId);
        this.saveTodos();
        this.renderTodoList();
    },

    handleTaskDone: function (taskId) {
        const task = this.todosArray.find((todo) => todo.id === taskId);
        const li = document.getElementById(taskId);
        if (task) {
            if (task.is_marked_done === false) {
                task.is_marked_done = true;
                li.style.textDecoration = 'line-through';
                li.style.color = 'gray';
            }
            else {
                task.is_marked_done = false;
                li.style.textDecoration = 'none';
                li.style.color = 'rgb(139, 131, 255)';
            }
            this.saveTodos();
            this.renderTodoList();
        }
    },

    renderTodoList: function () {
        document.getElementById('list').innerHTML = '';
        if (this.todosArray.length > 0) {
            this.todosArray.forEach((curr_task) => {
                this.addToList(curr_task);
            });
        }
    },

    addToList: function (new_task) {
        const li = document.createElement('li');
        li.id = new_task.id;
        li.textContent = new_task.task;

        li.className = "ml-[-30px] text-left p-[10px] bg-white text-[5.5mm] font-sans w-[auto] h-[auto] rounded-[10px] mb-[40px] flex flex-wrap hover:no-underline relative shadow-custom bg-slate-50";

        if (new_task.is_marked_done === true) {
            li.style.textDecoration = 'line-through';
            li.style.color = 'gray';
        }
        const done = document.createElement('button');
        done.className = "mark_as_done mt-0 ml-[20px] w-[7.5mm] h-[7.5mm] border-[1px] border-[#47C5DC] bg-white rounded-[5px] text-[3.7mm] text-[#47C5DC] absolute right-[60px] hover:text-green-700 hover:border-2 hover:border-blue-400 ";
        done.textContent = '✔';

        done.addEventListener('click', () => this.handleTaskDone(new_task.id));

        const dlt = document.createElement('button');
        dlt.className = "delete mt-0 ml-[20px] w-[7.5mm] h-[7.5mm] border-[1px] border-[#47C5DC] bg-white rounded-[5px]  text-[3.7mm] font-bold absolute right-[15px] hover:text-red-700 hover:border-2 hover:border-blue-400";
        dlt.textContent = '✘';

        dlt.addEventListener('click', () => this.deleteTask(new_task.id));

        li.appendChild(done);
        li.appendChild(dlt);

        document.getElementById('list').appendChild(li);
    }
};

export { todoRepository };
// function addToList(new_task) {
//     const li = document.createElement('li');
//     li.id = new_task.id;
//     li.textContent = new_task.task;

//     li.className = "ml-[-30px] text-left p-[10px] bg-white text-[5.5mm] font-sans w-[auto] h-[auto] rounded-[10px] mb-[40px] flex flex-wrap hover:no-underline relative shadow-custom bg-slate-50";

//     if (new_task.is_marked_done === true) {
//         li.style.textDecoration = 'line-through';
//         li.style.color = 'gray';
//     }
//     const done = document.createElement('button');
//     done.className = "mark_as_done mt-0 ml-[20px] w-[7.5mm] h-[7.5mm] border-[1px] border-[#47C5DC] bg-white rounded-[5px] text-[3.7mm] text-[#47C5DC] absolute right-[60px] hover:text-green-700 hover:border-2 hover:border-blue-400 ";
//     done.textContent = '✔';

//     done.setAttribute('onclick', `handleTaskDone('${id}')`);

//     const dlt = document.createElement('button');
//     dlt.className = "delete mt-0 ml-[20px] w-[7.5mm] h-[7.5mm] border-[1px] border-[#47C5DC] bg-white rounded-[5px]  text-[3.7mm] font-bold absolute right-[15px] hover:text-red-700 hover:border-2 hover:border-blue-400";
//     dlt.textContent = '✘';
//     dlt.setAttribute('onclick', `deleteTask('${id}')`);

//     li.appendChild(done);
//     li.appendChild(dlt);

//     document.getElementById('list').appendChild(li);
// }

// function handleTaskDone(id) {
//     todoRepository.handleTaskDone(id);
// }

// function deleteTask(id) {
//     todoRepository.deleteTask(id);
// }

