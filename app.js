import express from "express";

import { config } from "./config";
import { routes } from "./routes";

//import das classes das rotas
import { User } from './src/routes/User/User';

const app = express();
app.use(express.json());

app.post(routes.createUser, (request, response, next) => {
  const user = new User();

  user.CreateUser(request)
  response.status(200).send({ msg: "Success" });
});

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}!`);
});
