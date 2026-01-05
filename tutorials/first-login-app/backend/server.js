const express = require("express");
const pool = require("./db"); // import PostgreSQL connection

const app = express();
const PORT = 3000;

// Middleware: allows server to read JSON from requests
app.use(express.json());

/**
 * TEST ROUTE
 * Visit http://localhost:3000
 */
app.get("/", (req, res) => {
  res.send("Server is running!");
});

/**
 * DATABASE TEST ROUTE
 * Visit http://localhost:3000/db-test
 */
app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).send("Database connection failed");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
