// JavaScript watch and code 'ToDo'

var todo = undefined;

function initTodo(){
    var todo = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
}

function displayTodo(){
    console.log(todo);
}

function addTodo(todo){
    todo.push(todo);
    displayTodo;
}

function deleteTodo(position){
    todo.slice(position, 1);
    displayTodo;
}
