import express from "express";

import { config } from "./config";
import { routes } from "./routes";

//import das classes das rotas
import { User } from "./src/routes/User/User";
import { Database } from "./connection";

const app = express();
app.use(express.json());

app.post(routes.createUser, (request, response) => {
  const user = new User();

  user.CreateUser(request, response);
});

app.post(routes.findUser, async (request, response) => {
  const db = new Database();
  const connection = await db.connect();
  const userCollection = new User(connection);

  try {
    const user = await userCollection.FindUser(request.body);
    response.status(200).send({ msg: user });
  } catch (err) {
    console.log("err :", err);
  }
});

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}!`); 
});
