const express = require("express");
const app = express();
const port = 2777;

app.get("/", (req, res) => {
  res.send("💣DaBomb💣 URL Shortener backend!");
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
