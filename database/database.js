import sqlite3 from "sqlite3";
import { fileURLToPath } from "url";
import path from "path";

// Get the file path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Calculate the absolute path to the database file
const dbFilePath = path.resolve(__dirname, "./db/tasks.db");

// Open SQLite database
const db = new sqlite3.Database(dbFilePath);

// Create tasks table if not exists
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, name TEXT, completed BOOLEAN)"
  );
});

export default db;
