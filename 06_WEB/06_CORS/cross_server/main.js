const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// corsミドルウェア
const corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200,
  methods: ["GET", "POST"],
};

app.options("/api", cors(corsOptions));

app.get("/api", cors(corsOptions), (req, res) => {
  res.json({ message: "GET request to the homepage" });
});

app.post("/api", cors(corsOptions), (req, res) => {
  res.json({ message: "POST request to the homepage" });
});

app.listen(3002, () => {
  console.log(`Server is running on port 3002`);
});
