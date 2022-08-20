import express from "express";
import { isLoggedIn } from "../../middlewares";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookId,
  updateBook,
  // validateBody,
} from "./bookController";

const bookRouter = express.Router();
bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", getBookId);
bookRouter.post("/", createBook);
bookRouter.put("/:id", isLoggedIn, updateBook);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;
