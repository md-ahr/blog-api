import authRoute from '@routes/auth.route';
import cors from 'cors';
import express, { Application } from 'express';

const createServer = (): Application => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(express.json());
  app.use('/api/v1/auth', authRoute);

  return app;
};

export { createServer };
