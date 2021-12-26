// import the query function
import { query } from "./database.js";

//* create table
export async function createTable() {
  const result = await query(
    `CREATE TABLE IF NOT EXISTS questions (id SERIAL PRIMARY KEY, question TEXT, answer1 TEXT, answer2 TEXT, answer3 TEXT, answer4 TEXT);`
  );
  console.log(result);
  return result;
}
createTable();

//* populate table
export async function populateTable() {
  const result = await query(
    `INSERT INTO questions (question, answer1, answer2, answer3, answer4) VALUES () RETURNING*;`
  );
  console.log(result);
  return result;
}

//* retrieve all table
export async function getAllTable() {
  const result = await query(`SELECT * FROM questions;`);
  return result.rows;
}

//* retrieve one question
export async function getQuestion(id) {
  const result = await query(`SELECT * FROM questions WHERE ID = $1;`[id]);
  return result.rows;
}
