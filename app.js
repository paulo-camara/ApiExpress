import express from "express";
import bodyParser from "body-parser";

import { config } from "./config";
import { routes } from "./routes";

import { OperationDataBase } from "./connection";

const app = express();

app.use(express.json());

app.post(routes.login, (request, response, next) => {
  const { user, password, email } = request.body;

  OperationDataBase("users", "insertOne", {
    user: user,
    password: password,
    email: email,
    createdAt: new Date()
  });

  response.send("hello word");
});

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}!`);
});
