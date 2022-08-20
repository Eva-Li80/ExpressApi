import express, { NextFunction, Request, Response } from "express";
require("express-async-errors");
import {
  errorHandler,
  isLoggedIn,
  logger,
  notFoundHandler,
} from "./middlewares";
import bookRouter from "./resourses/Books/books.router";

const app = express();

app.use(express.json());
app.use("/api/books", bookRouter);

app.use(logger);
app.use(notFoundHandler);
app.use(errorHandler);

app.listen(3000, () => console.log("Running on: http://localhost:3000"));
