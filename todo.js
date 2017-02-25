// JavaScript watch and code 'ToDo' -- v4: objects and booleans.  objects expanded

var todoList = {
    todos: [],

    displayTodos: function() {
        console.log("My Todos: ", this.todos);  // can I use a + here instead of , ?
    },

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false,
        });
        this.displayTodos();
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    changeTodo: function(position, todoText) {
        //this.todos[position] = todo;    // v3. 
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },

    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed
        // isn't this the same???  why did he write it in 2 lines, more complicated, if I could write it in one?  https://watchandcode.com/courses/60264/lectures/946811
        //this.todos[position].completed = !this.todos[position].completed;
        this.displayTodos();
    }
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
