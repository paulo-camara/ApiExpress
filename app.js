import express from 'express';
import { config } from './config';
import { routes } from './routes';

const app = express();

app.get(routes.login, (req, res)=> {
  res.send(doLogin(req, res));
});

app.listen(config.port, ()=> {
console.log(`App listening on port ${config.port}!`);
});

const doLogin = (req, res)=> {
  console.log(req.body, res);
}
