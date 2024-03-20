import inquirer from "inquirer";
import dbRunner from "../../database/index.js";

const { addTask, displayTasks } = dbRunner();

export default async function promptAddTask() {
  const { name } = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter task name:",
    },
  ]);
  addTask(name);
  displayTasks();
}
