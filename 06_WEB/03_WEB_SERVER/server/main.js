const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.json({ text: "hello world" });
});

app.post("/", express.json(), (req, res) => {
  try {
    if (req.headers["content-type"] !== "application/json") {
      res.sendStatus(400);
      return;
    }
    res.status(201).json(req.body);
  } catch (error) {
    res.sendStatus(400);
  }
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
