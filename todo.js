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
                this.toggleCompleted(i); // i wonder if it's a better idea to call this method, or set it to false explictly?
                //this.todos[i].completed = true;
                console.log(i + " was not completed.  setting to complete");
            }
        }
        if (numCompleted === 0){
            console.log("all were completed, setting all to not-completed");
            for (var i = 0; i < this.todos.length; i++) {
                this.toggleCompleted(i);
                //this.todos[i].completed = false;
            }
        }
        this.displayTodos();
    }
};

