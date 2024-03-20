import db from "./database.js";

// Function to add a task
export const addTask = (name, completed = false) => {
  db.run(
    "INSERT INTO tasks (name, completed) VALUES (?, ?)",
    [name, completed],
    function (err) {
      if (err) {
        console.error(err.message);
      } else {
        console.log(`Task '${name}' added with ID ${this.lastID}`);
      }
    }
  );
};

// Function to delete a task by ID
export const deleteTask = (id) => {
  db.run("DELETE FROM tasks WHERE id = ?", id, function (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Task with ID ${id} deleted`);
    }
  });
};

// Function to mark a task as completed by ID
export const markTaskCompleted = (id) => {
  db.run("UPDATE tasks SET completed = 1 WHERE id = ?", id, function (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Task with ID ${id} marked as completed`);
    }
  });
};

// Function to display all tasks
export const displayTasks = () => {
  db.all("SELECT * FROM tasks", (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Tasks:");
      rows.forEach((row) => {
        console.log(`${row.id}. [${row.completed ? "X" : " "}] ${row.name}`);
      });
    }
  });
};
