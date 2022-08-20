import express, { NextFunction, Request, Response } from "express";
export const isLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    next();
  } else {
    res.status(401).json("pleace logg in first");
  }
};

export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.path);
  next();
  return;
};
