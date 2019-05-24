import express from 'express';
import mongoose from 'mongoose';

import { config } from './config';
import { routes } from './routes';

mongoose.connect(config.mongo_db, {
  useNewUrlParser: true,
}).then((res) => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.log('error connect mongoDB', err)
});

// let connection = mongoose.connection;

// var ObjectID = require('mongodb').ObjectID;

// connection.collection('users').insertOne({ _id: new ObjectID(), user: 'claudia', password: 123123 });

const app = express();

app.get(routes.login, (req, response, next) => {
  const err = new Error('');
  err.statusCode = 404;

  next(err);
});

app.listen(config.port, () => {
  console.log(`App listening on port ${config.port}!`);
});
