import express from "express";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookId,
  putBook,
} from "./bookController";

const bookRouter = express.Router();
bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookId);
bookRouter.post("/", createBook);
bookRouter.put("/:id", putBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
