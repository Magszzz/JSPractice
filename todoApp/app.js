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
        const todos = document.querySelector('#todos');
        const div = document.createElement('div');
        div.className = 'todos-item';
        div.innerHTML = `
        <input type="checkbox" class="check">
        <section>
            <span>${tasks.task}</span>
            <input value="${tasks.task}" class="inp">
        </section>
        <a href="#" class="btn-danger"><i class="fa fa-trash"></i></a>
        `; 

        todos.appendChild(div);
    }

    static clear(){
        const input = document.querySelector('#task').value = '';
    }

    static editTask(){
        const todos = document.querySelector('#todos');
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
        const todos = document.querySelector('#todos');
        const check = todos.querySelectorAll('.check');

        for(let i=0; i<check.length; i++){
            check[i].addEventListener('click', ()=>{
                const span = check[i].nextElementSibling.querySelector('span');
                span.classList.toggle('oncheck');
            })
        }
    }
}


// class TasksStorage{
//     static getData(){

//     }

//     static displaydata(){

//     }

//     static deleteData(){

//     }
// }

document.querySelector('#submit').addEventListener('click', () => {
    const task = document.querySelector('#task').value;
    const tasks = new Task(task);

    Todos.displayTodos(tasks);
    Todos.editTask();
    Todos.checkTask();
    Todos.clear();
})