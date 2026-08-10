import taskManager from "./taskManager.js";

taskManager.addTask("Learn JavaScript Modules");
taskManager.addTask("Learn JSON");
taskManager.addTask("Practice import and export");

taskManager.showTasks();
taskManager.completeTask(1);

taskManager.completeTask(2);

console.log("AFTER COMPLETING TASK :");

taskManager.showTasks();

const jsonData = taskManager.getTasksAsJSON();

console.log("JSON DATA:");

console.log(jsonData);
