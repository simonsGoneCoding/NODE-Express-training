const express = require("express");
const path = require("path"); //node.js internal package
const cookieParser = require("cookie-parser");
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

// app.get("/", (req, res) => {
//   res.send('<a href="/go_back">BACK</a>');
// });

// app.get("/go_back", (req, res) => {
//   // res.redirect("..");
//   res.redirect("back");
// });
// // ----                 ----

//EX8. ------ Sending files ------

// ---- res.sendFile() ----
// app.get("/", (req, res) => {
//   const fileName = "index2.html";
//   res.sendFile(fileName, {
//     root: path.join(__dirname, "./static")
//   });
// });

// app.get("/logo", (req, res) => {
// const fileName = path.join(__dirname, "./static/logo.png");
// res.sendFile(fileName);
//   const fileName = "logo.png";
//   res.sendFile(fileName, {
//     root: path.join(__dirname, "./static")
//   });
// });

// ---- res.attachment() ----
// app.get("/", (req, res) => {
//   const fileName = "logo.png";
//   res.attachment(fileName, {
//     root: path.join(__dirname, "./static")
//   });
//   res.end();
// });

// ----                  ----
// ---- res.download() ----
// app.get("/", (req, res) => {
//   const fileName = path.join(__dirname, "./static/logo.png");

//   res.download(fileName, "name changed.png");
// });

// ------ EX9. Working with headings ------
// ----cookies

// app.get("/", (req, res) => {
//   res.send("Main page");
// });

// app.get("/hi/:name", (req, res) => {
//   const { name } = req.params;
//   const dt = new Date();
//   dt.setDate(dt.getDate() + 7);

//   res.cookie("visitor_name", name, {
//     // expires: dt     //   <-- expires in 7 days
//     maxAge: 5 * 60 * 1000
//   });
//   res.send(`Welcome ${name} sit down and relax.`);
// });

// app.get("/logout", (req, res) => {
//   res.clearCookie("visitor_name");
//   // res.send("By by baby by by");
//   res.redirect("/");
// });

// ------ EX10. Middleware ------

// app.use(express.json());
// app.post("/here", (req, res) => {
//   const { name, surname } = req.body;
//   res.send(`Welcome ${name} known as ${surname}`);
// });

// --------
app.use(express.json());
// app.use(express.static(path.join(__dirname, "static")));
// -------

// ---- cookie-parser ----
app.use(cookieParser());

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("Main page");
});
