import inquirer from "inquirer";
import dbRunner from "./database/index.js";
import inquirerRunner from "./inquirer/index.js";
import initialiseDBConnection from "./database/helpers/initialiseDBConnection.js";

// Initialize the database connection
const db = initialiseDBConnection();

// Get functions from dbRunner and inquirerRunner
const { displayTasks, closeDBConnection } = dbRunner(db);
const { promptAddTask, promptDeleteTask, promptMarkTaskCompleted } =
  inquirerRunner();

async function toDosCallStack() {
  // Prompt the user for actions
  while (true) {
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
        closeDBConnection();
        process.exit(0);
    }
  }
}

// Call the main function
toDosCallStack().catch((error) => console.error(error));
