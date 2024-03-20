import inquirer from "inquirer";
import dbRunner from "../../database/index.js";

const { markTaskCompleted, displayTasks } = dbRunner();

// Function to prompt user for task ID to mark as completed
export default async function promptMarkTaskCompleted() {
  const { id } = await inquirer.prompt([
    {
      type: "input",
      name: "id",
      message: "Enter task ID to mark as completed:",
    },
  ]);
  markTaskCompleted(id);
  displayTasks();
}
