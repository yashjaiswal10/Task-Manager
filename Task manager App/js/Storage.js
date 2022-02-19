// Function to local storage 
const StorageConroller = (function() {
    return {
        addTask(task) {
            let tasks;
            if (localStorage.getItem('tasks') === null) {
                tasks = [];
                tasks.push(task)
            } else {
                tasks = JSON.parse(localStorage.getItem('tasks'));
                tasks.push(task)
            }
            localStorage.setItem('tasks', JSON.stringify(tasks))
        },
        getTasks() {
            let tasks;
            if (localStorage.getItem('tasks') === null) {
                tasks = [];
            } else {
                tasks = JSON.parse(localStorage.getItem('tasks'));
            }
            return tasks;
        },
        updateTask(updatedTask) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));
            tasks.forEach((task, idx) => {
                if (task.id === updatedTask.id) {

                    tasks.splice(idx, 1, updatedTask)
                }
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));

        },
        deleteTask(taskToBeDeleted) {
            let tasks = JSON.parse(localStorage.getItem('tasks'));

            const filteredTask = tasks.filter(task => task.id !== taskToBeDeleted.id);
            localStorage.setItem('tasks', JSON.stringify(filteredTask));
        }
    }
})()