class Task {
    constructor(task){
        this.task = task;
    }
}

// UI
const todos = document.querySelector('#todos');

class Todos{
    static getTodos(){
        let task = TasksStorage.getData();
        task.map((tasks) => {Todos.displayTodos(tasks)})
    }

    static displayTodos(tasks){
        const div = document.createElement('div');
        div.className = 'todos-item';
        div.innerHTML = `
        <input type="checkbox" class="check">
        <section>
            <span>${tasks.task}</span>
            <input value="${tasks.task}" class="inp">
        </section>
        <a href="#" class="btn-danger delete"><i class="fa fa-trash deleteI"></i></a>
        `; 
        todos.appendChild(div);
    }

    static clear(){
        const input = document.querySelector('#task').value = '';
    }

    static editTask(){
        const section = todos.querySelectorAll('section');
        const inp = todos.querySelectorAll('.inp');
        const check = todos.querySelectorAll('.check');

        for(let i=0; i<section.length; i++){
            section[i].addEventListener('click', () =>{
                section[i].className = 'edit';
                let input = section[i].querySelector('input')
                input.focus();
                input.setSelectionRange(0, input.value.length);
            })

            inp[i].addEventListener('blur', () => {
                inp[i].previousElementSibling.innerHTML = inp[i].value;
                inp[i].parentNode.className = '';
            })

            inp[i].addEventListener('keypress', (e)=>{
                if(e.which === 13){
                    inp[i].previousElementSibling.innerHTML = inp[i].value;
                    inp[i].parentNode.className = '';
                }
            })
        }
    }

    static checkTask(){
        const check = todos.querySelectorAll('.check');
        const span = todos.querySelectorAll('span');
        for(let i=0; i<check.length; i++){
            check[i].addEventListener('click', ()=>{
                if(span[i].classList.contains('oncheck')){
                    span[i].className = '';
                }else{
                    span[i].className = 'oncheck';
                }
            })
        }
    }

    static deleteTask(target){
        if(target.classList.contains('delete')){
            target.parentElement.remove();
        }else if(target.classList.contains('deleteI')){
            target.parentElement.parentElement.remove();
        }
    }

    static alertTask(message, color){
        const div = document.createElement('div');
        const form = document.querySelector('.input-items');
        const container = document.querySelector('.container');
        div.className = color;
        div.innerHTML = message;
        container.insertBefore(div, form);

        setInterval(() => {
            div.remove();
        }, 1500);
    }
}


class TasksStorage{
    static getData(){
        let tasks;
        if(localStorage.getItem('Tasks') === null){
            tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem('Tasks'));
        }

        return tasks;
    }

    static displaydata(task){
        let tasks = TasksStorage.getData();
        tasks.push(task);

        localStorage.setItem('Tasks', JSON.stringify(tasks));
    }

    static deleteData(target){
        let tasks = TasksStorage.getData();

        tasks.forEach((task,index) => {
            if(task.task === target){
                tasks.splice(index, 1);
            }
        })

        localStorage.setItem('Tasks', JSON.stringify(tasks));
    }
}

document.addEventListener('DOMContentLoaded', Todos.getTodos());

document.querySelector('#submit').addEventListener('click', () => {
    const task = document.querySelector('#task').value;

    if(task === ''){
        Todos.alertTask('Input Has No Value', 'alert-danger')
    }else{
        const tasks = new Task(task);
        Todos.displayTodos(tasks);
        TasksStorage.displaydata(tasks);
        Todos.alertTask('Tasks Completely Added', 'alert-success')
        Todos.editTask();
        Todos.checkTask();
        Todos.clear();
    }
})

todos.addEventListener('click', e => {
    const target = e.target
    let text;
    if(target.classList.contains('delete')){
        let t =  target.previousElementSibling.querySelector('span');
        text = t.innerHTML;
    }else if(target.classList.contains('deleteI')){
        let t = target.parentElement.previousElementSibling.querySelector('span');
        text = t.innerHTML;
    }

    Todos.deleteTask(target);
    TasksStorage.deleteData(text);
    Todos.alertTask('Tasks Completely Removed', 'alert-success')
})