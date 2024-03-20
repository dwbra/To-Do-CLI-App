export default function markTaskCompleted(db, id) {
  db.run("UPDATE tasks SET completed = 1 WHERE id = ?", id, function (err) {
    if (err) {
      console.error(err.message);
    } else {
      console.log(`Task with ID ${id} marked as completed`);
    }
  });
}
