
import express, { Express } from 'express';
import guardianRouter from './routes/guardian.route';
import * as dotenv from 'dotenv';

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/', guardianRouter);

app.listen(port, () => {
  console.log('Listening on port ', port);
})