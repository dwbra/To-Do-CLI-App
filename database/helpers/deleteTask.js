export default function deleteTask(db, id) {
  db.run("DELETE FROM tasks WHERE id = ?", id, function (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Task with ID ${id} deleted`);
    }
  });
}
