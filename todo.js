// JavaScript watch and code 'ToDo' -- v4: objects and booleans.  objects expanded

var todoList = {
    todos: [],

    displayTodos: function() {
        console.log("My Todos count: ", this.todos.length);
        if (this.todos.length === 0){
            console.log("My Todos list is empty.");
        } else {
            //console.log("My Todos: ", this.todos);  // can I use a + here instead of , ?.  does comma add a space?
            for (var i = 0; i < this.todos.length; i++) {
                var status = undefined;
                if (this.todos[i].completed === true){
                    status = 'x';
                } else {
                    status = ' ';
                }
                console.log("Todo #" + i + " (" + status + ") " + this.todos[i].todoText);
            }
        }
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
    },

    // if at least 1 is not complete, set that and anything else to complete.
    // if all are complete already, set them all to not-complete
    // if all are not-complete, set them to complete
    toggleAll: function() {
        var numCompleted = 0;
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === false) {
                numCompleted++;
                this.toggleCompleted(i);
                console.log(i + " was not completed.  setting to complete");
            }
        }
        if (numCompleted === 0){
            console.log("all were completed, setting all to not-completed");
            for (var i = 0; i < this.todos.length; i++) {
                this.toggleCompleted(i);
            }
        }
        this.displayTodos();
    }
};


// create handlers object with the methods that the page buttons can call.
// this is an alternative way that will replace the 'addEventListener' way of 
// adding functions to HTML button by page element IDs (getElementById).
// This case has less code, more connected, and easier to read in HTML
// that the buttons will do something when clicked, rather than the code being
// somewhere else that get's added on with JavaScript.
// Other times the 'addEventListener' is bettwer if we're doing more than just
// adding a click method.
var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function(){
    addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    addTodoTextInput.focus();
  },
  deleteTodo: function() {
    deleteTodoPosition = document.getElementById('deleteTodoPositionInput');
    todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
    deleteTodoPosition.value = '';
  },
  changeTodo: function() {
    changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);  // note: valueAsNumber
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  toggleCompleted: function() {
    toggleCompletedPosition = document.getElementById('toggleCompletedPosition');
    todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
};
