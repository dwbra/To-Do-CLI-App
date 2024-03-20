export default function addTask(db, name, completed = false) {
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
}
