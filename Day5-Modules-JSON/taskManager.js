import { createTask } from "./task.js";

const tasks = [];

function addTask(title) {

    const id = tasks.length + 1;

    const task = createTask(id, title);

    tasks.push(task);

}

function showTasks() {

    console.log("-- Task List --");

    tasks.forEach(function(task) {

        console.log(
            task.id +
            ". " +
            task.title +
            " - " +
            (task.completed ? "Completed" : "Pending")
        );

    });

}

function completeTask(id) {

    const task = tasks.find(function(task) {
        return task.id === id;
    });

    if (task) {

        task.completed = true;

        console.log(
            task.title + " marked as completed."
        );

    }

}

function getTasksAsJSON() {

    return JSON.stringify(tasks);

}

function loadTasksFromJSON(jsonData) {

    const loadedTasks = JSON.parse(jsonData);

    tasks.length = 0;

    tasks.push(...loadedTasks);

}

export default {
    addTask,
    showTasks,
    completeTask,
    getTasksAsJSON,
    loadTasksFromJSON
};