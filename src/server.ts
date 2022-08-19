import express from "express";
import bookRouter from "./resourses/Books/books.router";
//const Joi = require("joi");
const app = express();
app.use(express.json());
app.use("/api/books", bookRouter);
// app.use((req, res, next) => {
//   console.log(req.method, req.path);
//   next();
//   return;
// });

app.listen(3000, () => console.log("Running on: http://localhost:3000"));
