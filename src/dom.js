const searchForm = document.querySelector('.search');
const todosForm = document.querySelector('.todo');
const lists = document.querySelector('.list-group');


const searchTodo = (term) =>{
    
    Array.from(lists.children).filter(todo =>!todo.textContent.includes(term))
     
    .forEach(todos =>todos.classList.add('filter'))

    Array.from(lists.children).filter(todo => todo.textContent.includes(term))
    .forEach(todos =>todos.classList.remove('filter'))
    
}

const addTodos = (todo)=>{
  const html =`<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="fa-regular fa-trash-can delete"></i>
    </li>`
    lists.innerHTML +=html
}

todosForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo  = todosForm.todo.value.trim();
    if(todo.length >0){
    addTodos(todo)
    }
    
    todosForm.reset();
})

searchForm.addEventListener('keyup',()=>{
    const term = searchForm.search.value.trim();
    searchTodo(term)
   
})

lists.addEventListener('click',e=>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
})