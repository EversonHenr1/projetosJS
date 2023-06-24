
//função que Adicionar tarefa
function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value
    if(taskTitle){
        //clona template

        const template = document.querySelector(".template")

        const newTask = template.cloneNode(true);


        //adicionar titulo
        
        newTask.querySelector(".task-tittle").textContent = taskTitle;

        //remover as classes desnecessarias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        //adicionar o evento de remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click",function(){
            removeTask(this)
        })
        //adicionar o evento de completar a tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click",function(){
            completeTask(this)
        })

        //Adicionar tarefa na lista
        const list = document.querySelector("#task-list")
        
        list.appendChild(newTask)
        //limpar texto
        document.querySelector("#task-title").value = ""
    }
}
//função de remover a tarefa
function removeTask(task){
    task.parentNode.remove()
}
//função de completar a tarefa
function completeTask(task){
    const pai = task.parentNode
    pai.classList.toggle("done")
}
//evento de Adicionar Tarefa

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click",function(e){

    e.preventDefault();

    addTask();

});