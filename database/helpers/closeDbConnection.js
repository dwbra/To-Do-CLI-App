// Close SQLite database connection
export default function closeDBConnection(db) {
  if (db) {
    db.close((err) => {
      if (err) {
        console.error(`Error closing database connection: ${err.message}`);
      } else {
        console.log("Database connection closed");
      }
    });
  } else {
    console.warn("No active database connection to close");
  }
}
