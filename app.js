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

// app.all("/", req => {
//   console.log("req.protocol", req.protocol);
//   console.log("req.secure", req.secure);
//   if (req.protocol !== "https") {
//     console.log("protocol not secure");
//   }
//   if (!req.secure) {
//     console.log("protocol not secure");
//   }
// const { name, surname } = req.query;   // receiving parameters by backend
// console.log(`Welcome ${name} sit down and relax`);
// });

//  ------ EX5. req.get and Referrer/Referer ------
// app.all("/", req => {
//   console.log(req.get("Referer"));
// });

//  ------ EX6. Routing and Object params ------
//first path
// app.get("/hello/new-user", req => {
//   console.log("Adding new user");
// });
// //second path (order does matter)
// app.get("/hello/:name", req => {
//   console.log("Welcoming visitor");
// });

// app.get("/hello/:name", req => {
//   console.log(`Hi ${req.params.name}`);
// });

// app.get("/article/:id/:title?", req => {
//   console.log(req.params);
// });

// app.all("/", req => {
//   console.log("Guest list");
// });

// app.get("/:id", req => {
//   console.log(`Guest with id${req.params.id} detail info`);
// });

// app.post("/", req => {
//   console.log("Adding new guest");
// });

// app.patch("/:id", req => {
//   console.log(`Guest with id${req.params.id} update`);
// });

// app.delete("/:id", req => {
//   console.log("Deleting guest with id${req.params.id}");
// });

//  ------ EX7. Object Response ------

// ---- res.send() ----
// app.get("/", (req, res) => {
//   const text = "Here is response";
//   const toArr = text.split(" ");
//   res.send(toArr);
// });

// app.get("/", (req, res) => {
//   res.send({
//     text: "response as object value",
//     isGood: true,
//     number: 1
//   });
// });
// ----          ----

// ---- res.json() ---- // to send json (sets as deafult content-type for application/json)
// app.get("/", (req, res) => {
// res.send("responding with text"); // here Content-Type: text/html; charset=utf-8
//   res.json("responding with text"); // here Content-Type: application/json; charset=utf-8
// });
// ----             ----

// ---- res.location()  ----
// app.get("/", (req, res) => {
//   res.location("https://google.com");
//   res.sendStatus(302);
// });
// ----                 ----

// ---- res.redirect()  ----
// app.get("/", (req, res) => {
//   res.redirect("https://google.com");
// });

app.get("/", (req, res) => {
  res.send('<a href="/go_back">BACK</a>');
});

app.get("/go_back", (req, res) => {
  // res.redirect("..");
  res.redirect("back");
});
// ----                 ----
