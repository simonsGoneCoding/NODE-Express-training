const express = require("express");

//creating server
const app = express();

app.listen(3000, "127.0.0.1", () => {
  console.log("Server is listening at: http://localhost:3000");
});

app.get("/", () => {
  console.log("Welcome funny fella");
});

app.get("/home", () => {
  console.log("Welcome home funny fella");
});
