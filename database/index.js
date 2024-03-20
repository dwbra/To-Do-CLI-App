import addTask from "./helpers/addTask.js";
import deleteTask from "./helpers/deleteTask.js";
import displayTasks from "./helpers/displayTasks.js";
import markTaskCompleted from "./helpers/markTaskCompleted.js";
import closeDBConnection from "./helpers/closeDbConnection.js";

export default function dbRunner(db) {
  return {
    addTask: (name, completed) => addTask(db, name, completed),
    deleteTask: (id) => deleteTask(db, id),
    displayTasks: () => displayTasks(db),
    markTaskCompleted: (id) => markTaskCompleted(db, id),
    closeDBConnection: () => closeDBConnection(db),
  };
}
