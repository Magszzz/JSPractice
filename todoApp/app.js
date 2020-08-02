class Task {
    constructor(task){
        this.task = task;
    }
}

// UI

class Todos{
    static getTodos(){
        const task = [
            {
                task: 'code'
            },
            {
                task: 'eat'
            }
        ]

        task.forEach(t => Todos.displayTodos(t));
    }

    static displayTodos(tasks){
        const table = document.querySelector('#tbody');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${tasks}</td>
        <td><a href="#" class="btn btn-danger btn-sm">X<a></td>
        `;

        table.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', Todos.getTodos())

// class TasksStorage{
//     static getData(){

//     }

//     static displaydata(){

//     }

//     static deleteData(){

//     }
// }