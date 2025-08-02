/*
Assignment #2 - Filesystem based todo list.

Create a `cli` that lets a user

    1. Add a todo
    2. Delete a todo
    3. Mark a todo as done

    Store all the data in files (todos.json)


    1. Add a To-Do : To add a new to-do item, use the add command followed by the deadline and the to-do title:
    $ node index.js add <Todo_Ttle> <Time>
    $ node index.js add "Go to Gym" "18:00"

    2. Remove a To-Do : To remove an existing to-do item, use the remove command followed by the title and the date of the JSON file:
    $ node index.js remove <Todo_Ttle> <Time>
    $ node index.js remove "Go to Gym" "18:00"

    3. Mark a To-do done : To Mark an existing to-do item done, use the mark command followed by the title and the date of the JSON file:
    $ node index.js mark <Todo_Ttle> <Time>
    $ node index.js mark "Go to Gym" "18:00"

    - For help
    $ node index.js -h
 */

    const fs = require('fs')
    const { Command } = require('commander');
    const program = new Command();
    const path = require('path')

    const todoStored = path.join(__dirname, "todo.json");


    function readTodos(todos){
        const data = fs.readFileSync(todoStored,'utf-8');
        return JSON.parse(data || "[]");
        
    }

    function writeTodo(todos){
        fs.writeFileSync(todoStored, JSON.stringify(todos),'utf-8');

    }

    program.command('add')
           .description('add task to the file')
           .argument('<todo_title>','enter the title of the task')
           .argument('<time>','enter time of the todo')
           .action((todoTitle, time)=>{
                    const todos = readTodos();

                    const newTodos = {
                        title: todoTitle,
                        time: time,
                        done: false,
                    }


                    todos.push(newTodos);
                    writeTodo(todos)
                    console.log("todos added successfully");

           })


           
    program.command('remove')
           .description('remove todos from the file')
           .argument('<todo_title>','enter the todo to remove')
           .action((todoTitle)=>{
                    const todos = readTodos();

                    const updatedTodo = todos.filter((x)=> x.title !== todoTitle);

                    if(todos.length === updatedTodo.length){
                        console.log("todo not found")
                    }else{
                        writeTodo(updatedTodo);
                        console.log("todo Removed successfully");

                    }
           })


    program.command('mark')
           .description('mark as done for completed task')
           .argument('<todoTitle>', 'enter todo to be mark as done')
           .action((todoTitle)=>{
            let todos = readTodos();
            let todoFound = false;

            todos = todos.map((x)=> {
                if(x.title = todoTitle){
                    x.done = true;
                    todoFound = true;

                }
                return x;

            })

            if(todoFound){
                writeTodo(todos)
                console.log('mark as done')
            }else{
                console.log('todo not found')
            }


           })


program.parse();
