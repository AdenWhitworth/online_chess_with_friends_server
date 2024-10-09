import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ error: true, message: err.message || "Internal Server Error" });
};