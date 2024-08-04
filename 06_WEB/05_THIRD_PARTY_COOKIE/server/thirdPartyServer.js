const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res
    .cookie("third", "third", {
      httpOnly: true,
      domain: "b197-240b-13-8560-cb00-35c7-c423-ac2c-e2de.ngrok-free.app",
    })
    .send("Cookie is set");
});

app.listen(3002, () => {
  console.log(`Server is running on port 3002`);
});
