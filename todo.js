// JavaScript watch and code 'ToDo' -- v3: objects and methods

var todoList = {
    todos: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],

    displayTodos: function() {
        console.log("My Todos: ", this.todos);  // can I use a + here instead of , ?
    },

    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    },
};








/* v2 : array and functions
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
*/
