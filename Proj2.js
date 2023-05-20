const readline = require('readline');
function Task(description,duDate,priority){
this.description=description;
this.duDate=duDate;
this.priority=priority;
this.completed=false;
}
const tasks=[];
function displayMenu() {
    console.log('***************************');
    console.log('Welcome to JS TODO-APP');
    console.log('***************************');
    console.log('Select an action:');
    console.log('1) Add a new task');
    console.log('2) List all tasks');
    console.log('3) List completed tasks');
    console.log('4) Mark a task as done');
    console.log('5) Delete a task');
    console.log('6) Sort tasks by due date');
    console.log('7) Sort tasks by priority');
    console.log('8) Clear all tasks');
    console.log('***************************');
    console.log("What's your choice?");
  }
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  //function to add new task 
  function addTask() {
    // const rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });
  
    rl.question('Enter task description: ', description => {
      rl.question('Enter task due date: ', dueDate => {
        rl.question('Enter task priority: ', priority => {
          const task = new Task(description, dueDate, priority);
          tasks.push(task);
          console.log('Task added successfully!');
          displayMenu();
          //rl.close();
        });
      });
    });
  }

  //function to delete task
  function deleteTask() {
    // const rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });
  
    rl.question('Enter the task number to delete: ', taskNumber => {
      const index = parseInt(taskNumber) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        console.log('Task deleted successfully!');
      } else {
        console.log('Invalid task number.');
      }
      displayMenu();
      //rl.close();
    });
  }
  //function to list all tasks
  function listAllTasks(){

if (tasks.length === 0) {
    console.log('No tasks found.');
  } else {
    console.log('All Tasks:');
    tasks.forEach((task, index) => {
      console.log(`${index + 1}) Description: ${task.description}, Due Date: ${task.dueDate}, Priority: ${task.priority}, Completed: ${task.completed}`);
    });
  }
 displayMenu();
  }
  //function ot list completed tasks
  function completedTasks(){
    const completedTasks = tasks.filter(task => task.completed);
    if (completedTasks.length === 0) {
      console.log('No completed tasks found.');
    } else {
      console.log('Completed Tasks:');
      completedTasks.forEach((task, index) => {
        console.log(`Task ${index + 1}: ${task.description}`);
      });
    }
    displayMenu();
  }
  //function to make a task completed
  function completed(){
    // const rl = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    //   });
    
      rl.question('Enter the task number to mark as done: ', taskNumber => {
        const index = parseInt(taskNumber) - 1;
        if (index >= 0 && index < tasks.length) {
          tasks[index].completed = true;
          console.log('Task marked as done!');
        } else {
          console.log('Invalid task number.');
        }
        displayMenu();
       // rl.close();
      });
  }
  //function to sort tasks by date
  function sortTasksByDate() {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    console.log('Tasks sorted by due date!');
    displayMenu();
  }
  //function to sort tasks by priority
  function sortTasksByPriority() {
    tasks.sort((a, b) => a.priority - b.priority);
    console.log('Tasks sorted by priority!');
    displayMenu();
  }
  /// clear all tasks
  function clearAllTasks() {
    tasks.length = 0;
    console.log('All tasks cleared!');
    displayMenu();
  }
  function UserInput(choice){
    switch (choice) {
        case '1':
            addTask();
            break;
        case '2':
            listAllTasks();
            break;
        case '3':
            completedTasks();
            break;
        case '4':
            completed();
            break;
        case '5':
            deleteTask();
            break;
        case '6':
            sortTasksByDate();
            break;
        case '7':
            sortTasksByPriority();
            break;
        case '8':
            clearAllTasks();
            break;
       default:
         console.log('Invalid choice. Please try again.');
        displayMenu();
        break;
       
    }



  }
  //make the app run
  function startApp() {
 
    displayMenu();
  
    rl.on('line', choice => {
    UserInput(choice);
    });
  }
  
 
  startApp();