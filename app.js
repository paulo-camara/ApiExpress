import express from 'express';

import { config } from './config';
import { routes } from './routes';

const app = express();

app.get(routes.login, (req, response, next)=> {
  const err = new Error('');
  err.statusCode = 404;

  next(err);
});

app.listen(config.port, ()=> {
  console.log(`App listening on port ${config.port}!`);
});
