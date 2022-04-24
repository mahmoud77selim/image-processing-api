import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import path from 'path';
import { routes } from './routes';
import morgan from 'morgan';

const Err404 = (req: Request, res: Response) => {
  res.status(404);
  res.render('pageNotFound');
};

dotenv.config();
const port = process.env['SERVER_PORT'];

export const app: Application = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

routes(app);

app.use(morgan('short'));
app.use(Err404);
app.listen(port, () =>
  console.log(`The server is up and started @http://localhost:${port}`)
);
