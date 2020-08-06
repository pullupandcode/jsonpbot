import { createConnection } from "typeorm";

export default (async function (createConnection) {
  const connection = await createConnection();
  return connection;
})(createConnection);
