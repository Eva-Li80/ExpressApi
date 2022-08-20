import { NextFunction, Request, Response } from "express";
//import { bookSchema } from "./booktype";
import Joi from "joi";

export const books = [
  {
    id: 1,
    name: "book1",
  },
  {
    id: 2,
    name: "book2",
  },
  {
    id: 3,
    name: "book3",
  },
];

export const getAllBooks = (req: Request, res: Response) => {
  res.status(200).send(books);
};

export const getBookId = (req: Request, res: Response) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) res.status(404).send("Not found");
  res.send(book);
};

export const createBook = (req: Request, res: Response) => {
  // if (!req.body.name || req.body.name.length < 3) {
  //   res.status(400).send("name must be minimum 3 letters");
  //   return;
  // }
  const book = {
    id: books.length + 1,
    name: req.body.name,
  };
  books.push(book);
  res.status(201).send(book);
  //   const book = req.body;
  //   res.status(201).send("created book");
};

export const updateBook = (req: Request, res: Response) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) res.status(404).send("ej funnen");

  // book.name = req.body.name;
  // res.send(book);
};

export const deleteBook = (req: Request, res: Response) => {
  const book = {
    id: books.length + 1,
    name: req.body.name,
  };
  books.push(book);
  res.status(204).send(book);
  //   const book = req.body;
  //   res.status(201).send("created book");
};

// export const validateBody = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const result = bookSchema.validate(req.body);
//   if (result.error) {
//     res.status(400).json(result.error.message);
//   } else {
//     next();
//   }
// };
