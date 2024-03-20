import inquirer from "inquirer";
import {
  promptAddTask,
  promptDeleteTask,
  promptMarkTaskCompleted,
} from "./inquirer/index.js";
import { displayTasks } from "./database/index.js";

// Function to prompt user for action
const main = async () => {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: "Choose an action:",
      choices: [
        "Add Task",
        "Delete Task",
        "Mark Task as Completed",
        "Display Tasks",
        "Exit",
      ],
    },
  ]);

  switch (action) {
    case "Add Task":
      await promptAddTask();
      break;
    case "Delete Task":
      await promptDeleteTask();
      break;
    case "Mark Task as Completed":
      await promptMarkTaskCompleted();
      break;
    case "Display Tasks":
      displayTasks();
      break;
    case "Exit":
      console.log("Exiting...");
      process.exit(0);
  }

  // Print a new line for separation after each action
  console.log();

  // Recursively call main function to keep prompting user for actions
  main();
};

// Start the application
main();
