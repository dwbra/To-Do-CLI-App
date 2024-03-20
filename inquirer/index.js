import inquirer from "inquirer";
import {
  addTask,
  deleteTask,
  markTaskCompleted,
  displayTasks,
} from "../database/index.js";

// Function to prompt user for task details
export const promptAddTask = async () => {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter task name:",
    },
  ]);
  addTask(name);
  displayTasks();
};

// Function to prompt user for task ID to delete
export const promptDeleteTask = async () => {
  const { id } = await inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "Enter task ID to delete:",
    },
  ]);
  deleteTask(id);
  displayTasks();
};

// Function to prompt user for task ID to mark as completed
export const promptMarkTaskCompleted = async () => {
  const { id } = await inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "Enter task ID to mark as completed:",
    },
  ]);
  markTaskCompleted(id);
  displayTasks();
};
