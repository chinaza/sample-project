import express from 'express';
import morgan from 'morgan';
import './db';
import { registerStudent, validateStudent } from './logic/controller';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.post('/register', registerStudent);

app.get('/validate/:id', validateStudent);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
