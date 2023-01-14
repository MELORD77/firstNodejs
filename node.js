// function log() {
//   console.log("hello", __dirname);
// }
// log();

// const log1 = () => {
//   console.log("log e");
// };
// log1();

// const dataobj = require("./data");
// console.log(dataobj);
// const path = require("path");
// console.log(path.format);

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.write("hello world");
//   res.end();
//   console.log();
// });
// server.listen(5000, () => {
//   console.log("server 5000");
// });

const express = require("express");
const path = require("path");
const app = express();
const books = require("./books");
const uuid = require("uuid");

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//post books
app.post("/api/books", (req, res) => {
  //   console.log(res);
  res.header("Content-type", "application/json");
  const newbook = {
    id: uuid.v4,
    name: req.body.name,
    prise: req.body.prise,
  };
  res.json(newbook);
  books.push(newbook);
  res.send(newbook);
  //   console.log(res);
  //   res.json(books);
});

// const logger = (req, res, next) => {
//   console.log("hello");
//   next();
// };
// app.use(logger);

//papkani static qilish
app.use(express.static(path.join(__dirname, "public")));

//get by id
app.get(`/api/books/:id`, (req, res) => {
  res.header("Content-type", "application/json");

  res.header("Accept", "application/json");

  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Credentials", "true");
  res.json(books.filter((book) => book.id == req.params.id));
});
//get books
app.get("/api/books", (req, res) => {
  res.header("Content-type", "application/json");

  res.header("Accept", "application/json");

  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Credentials", "true");
  //   res.send(path.join(__dirname, "public", "index.html"));
  res.json(books);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(PORT));
