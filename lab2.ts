// 1.
// (A) Create an array of strings
let tasks: string[] = []; 

// (B) Create an addTask function:
function addTask(task: string): number {
    tasks.push(task);
    console.log(`Task "${task}" was added to the list.`);
    return tasks.length;
}

// (C) Create a listAllTasks Function:
function listAllTasks() : void {
    console.log("The list of tasks in the array is: ");
    tasks.forEach(task => {
        console.log(task);
    });

}

// Delete task function
function deleteTask(task: string): number {
    const index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log(`Task "${task}" removed from the list.`);
    }

    return tasks.length;
}

// Call all of the functions
addTask("Finish the Lab");
addTask("Get 100% in MCQ");

listAllTasks();

deleteTask("Finish the Lab");

listAllTasks();


