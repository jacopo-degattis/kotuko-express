
import express, { Express } from 'express';
import guardianRouter from './routes/guardian.route';

const app: Express = express();

app.use('/', guardianRouter);

export default app;