const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

setInterval(() => {
  const timestamp = new Date().toISOString();
  const id = uuidv4();

  console.log(`${timestamp}: ${id}`);
}, 5000);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
