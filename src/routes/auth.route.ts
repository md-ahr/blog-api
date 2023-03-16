import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/register', (req: Request, res: Response) => {
  console.log(req);
  res.json({ message: 'register success' });
});

router.get('/login', (req: Request, res: Response) => {
  console.log(req);
  res.json({ message: 'login success' });
});

export default router;
