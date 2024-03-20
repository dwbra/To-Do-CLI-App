import sqlite3 from "sqlite3";

// Function to initialize SQLite database connection
export default function initialiseDBConnection() {
  // Open SQLite database connection
  const db = new sqlite3.Database("../db/tasks.db");

  // Create tasks table if not exists
  db.serialize(() => {
    db.run(
      "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, name TEXT, completed BOOLEAN)"
    );
  });

  console.log("Database connection initialized");

  return db;
}
