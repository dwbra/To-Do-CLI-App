export default function displayTasks(db) {
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
}
