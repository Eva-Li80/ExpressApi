import { Request, Response } from "express";

export const books = [
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

export const getAllBooks = (req: Request, res: Response) => {
  res.status(200).send(books);
};

export const getBookId = (req: Request, res: Response) => {
  const book = books.find((b) => b.id === parseInt(req.params.id));
  if (!book) res.status(404).send("Not found");
  res.send(book);
};

export const createBook = (req: Request, res: Response) => {
  const book = {
    id: books.length + 1,
    name: req.body.name,
  };
  books.push(book);
  res.status(201).send(book);
  //   const book = req.body;
  //   res.status(201).send("created book");
};

export const putBook = (req: Request, res: Response) => {
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
