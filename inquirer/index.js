import promptAddTask from "./prompts/promptAddTask.js";
import promptDeleteTask from "./prompts/promptDeleteTask.js";
import promptMarkTaskCompleted from "./prompts/promptMarkTaskCompleted.js";

export default function inquirerRunner() {
  return { promptAddTask, promptDeleteTask, promptMarkTaskCompleted };
}
