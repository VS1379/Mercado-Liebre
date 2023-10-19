const express = require("express");
const path = require("path");

const port = 8000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.listen(port, () => {
  console.log(`server on in http://localhost:${port}`);
});