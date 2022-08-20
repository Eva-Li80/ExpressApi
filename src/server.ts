import express, { NextFunction, Request, Response } from "express";
import { isLoggedIn, logger } from "./middlewares";
import bookRouter from "./resourses/Books/books.router";

const app = express();
app.use(express.json());
app.use("/api/books", bookRouter);

app.use(logger);

app.listen(3000, () => console.log("Running on: http://localhost:3000"));
