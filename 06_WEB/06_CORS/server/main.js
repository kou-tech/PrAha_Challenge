const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// 許可されたオリジン
const allowedOrigins = [
  "https://65cd-240b-13-8560-cb00-35c7-c423-ac2c-e2de.ngrok-free.app",
];

// corsミドルウェア
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,POST",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ message: "GET request to the homepage" });
});

app.post("/api", (req, res) => {
  res.json({ message: "POST request to the homepage" });
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
