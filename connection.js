import { MongoClient } from "mongodb";
import { config } from "./config";

export class Database {
  constructor(database_name = "first_data_base") {
    this.database_name = database_name;
    this.uri = config.mongo_db;
    this.options = {
      useNewUrlParser: true
    };
  }

  connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.uri, this.options, (err, client) => {
        if (err) {
          reject(err);
        } else {
          const db = client.db(this.database_name);
          resolve(db);
        }
      });
    });
  }
}
