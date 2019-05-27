import { OperationDataBase, FindInDataBase } from "../../../connection";
import { connect } from "http2";

export class User {
  constructor(conn) {
    this.conn = conn;
  }

  async FindUser({user, email}) {
    return this.conn.collection("users").findOne({
      $and: [{ user }, { email }]
    });
  }
}
