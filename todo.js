// JavaScript watch and code 'ToDo'

var todos = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];


function displayTodos(){
	console.log('My Todos: ', todos);
}

function addTodo(todo){
	todos.push(todo);
	displayTodos;
}

function deleteTodo(position){
	todos.splice(position, 1);
	displayTodos;
}

function changeTodo(position, newValue){
	todos[position] = newValue;
	displayTodos;
}
