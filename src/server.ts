import express from "express";
//const Joi = require("joi");
const app = express();
app.use(express.json());

// app.use((req, res, next) => {
//   console.log(req.method, req.path);
//   next();
//   return;
// });

const books = [
  {
    id: 1,
    name: "books1",
  },
  {
    id: 2,
    name: "books2",
  },
  {
    id: 3,
    name: "books3",
  },
];

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.get("/api/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) res.status(404).send("Not found");
  res.send(book);
});

app.post("/api/books", (req, res) => {
  const book = {
    id: books.length + 1,
    name: req.body.name,
  };
  books.push(book);
  res.send(book);
  //   const book = req.body;
  //   res.status(201).send("created book");
});

app.listen(3000, () => console.log("Running on: http://localhost:3000"));
