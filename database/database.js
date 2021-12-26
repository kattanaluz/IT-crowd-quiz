import pg from "pg";
import * as config from "./config.js";

//set up the pool with environment variables
const pool = new pg.Pool({
  port: config.configPort,
  host: config.configHost,
  database: config.configDatabase,
  user: config.configUser,
  password: config.configPassword,
  ssl: { rejectUnauthorized: false },
});

//set up the query
export function query(text, params) {
  return pool.query(text, params);
}
