// import the query function
import { query } from "./database.js";

//* create table
export async function createTable() {
  const result = await query(
    `CREATE TABLE IF NOT EXISTS questions (id SERIAL PRIMARY KEY, question TEXT, answer1 TEXT, answer2 TEXT, answer3 TEXT, answer4 TEXT);`
  );
  return result;
}

//* populate table
export async function populateTable(content) {
  const result = await query(
    `INSERT INTO questions (question, answer1, answer2, answer3, answer4) VALUES ($1, $2, $3, $4, $5) RETURNING*;`,
    [
      content.question,
      content.answer1,
      content.answer2,
      content.answer3,
      content.answer4,
    ]
  );
  return result;
}

//* retrieve all table
export async function getAllTable() {
  const result = await query(`SELECT * FROM questions;`);
  return result;
}

//* retrieve one question
export async function getQuestion(id) {
  const result = await query(`SELECT * FROM questions WHERE id = ${id};`);
  return result;
}
