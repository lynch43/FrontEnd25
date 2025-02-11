// 1.
// (A) Create an array of strings
var tasks = [];
// (B) Create an addTask function:
function addTask(task) {
    tasks.push(task);
    console.log("Task \"".concat(task, "\" was added to the list."));
    return tasks.length;
}
// (C) Create a listAllTasks Function:
function listAllTasks() {
    console.log("The list of tasks in the array is: ");
    tasks.forEach(function (task) {
        console.log(task);
    });
}
// Delete task function
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > -1) {
        tasks.splice(index, 1);
        console.log("Task \"".concat(task, "\" removed from the list."));
    }
    return tasks.length;
}
addTask("Finish the Lab");
addTask("Get 100% in MCQ");
listAllTasks();
deleteTask("Finish the Lab");
listAllTasks();
