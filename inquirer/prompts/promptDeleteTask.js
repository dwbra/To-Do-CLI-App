import inquirer from "inquirer";
import dbRunner from "../../database/index.js";

const { deleteTask, displayTasks } = dbRunner();

// Function to prompt user for task ID to delete
export default async function promptDeleteTask() {
  const { id } = await inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "Enter task ID to delete:",
    },
  ]);
  deleteTask(id);
  displayTasks();
}
