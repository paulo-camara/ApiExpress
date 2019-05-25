import { MongoClient } from "mongodb";
import { config } from "./config";

export const OperationDataBase = (
  collection,
  operation,
  document,
  database = "first_data_base"
) => {
  MongoClient.connect(
    config.mongo_db,
    { useNewUrlParser: true },
    (err, client) => {
      const db = client.db(database);

      db.collection(collection)[operation](document);
      console.log("Operation database effected")
    });
  console.log("MongoDB connected");
};
