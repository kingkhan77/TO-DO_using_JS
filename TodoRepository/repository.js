function getStoredTodos() {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
}

const todoRepository = {
    todosArray: getStoredTodos(),

    generateUUID: function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    addRepoTask: function (new_task) {
        this.todosArray.push({ id: this.generateUUID(), task: new_task, is_marked_done: false });
        this.saveTodos();
    },

    saveTodos: function () {
        localStorage.setItem('todos', JSON.stringify(this.todosArray));
    },


    deleteRepoTask: function (taskId) {
        this.todosArray = this.todosArray.filter(todo => todo.id !== taskId);
        this.saveTodos();
    },
};

export { todoRepository };
