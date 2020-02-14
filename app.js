const express = require("express");

//creating server
const app = express();

app.listen(3000, "127.0.0.1", () => {
  console.log("Server is listening at: http://localhost:3000");
});

// app.all("/", req => {
//   console.log("req.url", req.url);
//   console.log("req.originalurl", req.originalUrl);
//   console.log("req.path", req.path);
// });

app.all("/", req => {
  //   console.log("req.protocol", req.protocol);
  //   console.log("req.secure", req.secure);
  //   if (req.protocol !== "https") {
  //     console.log("protocol not secure");
  //   }
  //   if (!req.secure) {
  //     console.log("protocol not secure");
  //   }

  const { name, surname } = req.query;
  console.log(`Welcome ${name} sit down and relax`);
});
