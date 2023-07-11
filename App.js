const todoInput=document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");

todoButton.addEventListener("click",addtodo);

function addtodo(event){

    event.preventDefault();   


    const todoDiv=document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo=document.createElement('li');
    var intext=todoInput.value;
    newTodo.innerText=intext;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);


    const completeButton=document.createElement('button');
    completeButton.innerHTML='<i class="fa fa-solid fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fa fa-solid fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);


    todoList.appendChild(todoDiv);
    todoInput.value="";
    

    function deleteCheck(e){
        const item=e.target;

        if(item.classList[0]==="trash-btn"){
            const todo=item.parentElement;
            todo.classList.add("Dissapear");
            todo.addEventListener("transitionend",function(){
                todo.remove();
            });
            
        }
        if(item.classList[0]==="complete-btn"){
            let todo=item.parentElement;
            todo.classList.toggle("completed");
        }
    }
    todoList.addEventListener("click",deleteCheck);

    
    
}

