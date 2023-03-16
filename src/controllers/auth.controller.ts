import { Request, Response } from 'express';

export const register = (req: Request, res: Response) => {
  console.log(req);
  res.json({ message: 'register success' });
};

export const login = (req: Request, res: Response) => {
  console.log(req);
  res.json({ message: 'login success' });
};
