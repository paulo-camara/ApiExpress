import { MongoClient } from "mongodb";
import { config } from "./config";

export const OperationDataBase = (
  collection,
  operation,
  document,
  database = "first_data_base"
) => {
  MongoClient.connect(config.mongo_db, (err, client) => {
    const db = client.db(database);

    db.collection(collection)[operation](document);
  });
};
