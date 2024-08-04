const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  res
    .cookie("name", "express", {
      httpOnly: true,
    })
    .send("Cookie is set");
  next();
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
