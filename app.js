import express from "express";
import {
  getQuestion,
  createTable,
  getAllTable,
  populateTable,
} from "./database/models.js";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`The server is listening to the port ${PORT}`)
);

//* POST REQUESTS
//* create table
app.post("/create", async (req, res) => {
  const result = await createTable(req.body);
  res.json({ success: true, payload: result });
});

//* add content to the table
app.post("/populate", async (req, res) => {
  const result = await populateTable(req.body);
  res.json(result.rows);
});

//* GET REQUESTS
//* get the html page
/* app.get("/", (req, res) => {
  res.sendFile("index.html");
}); */

//*get all the table
app.get("/questions", async (req, res, next) => {
  const result = await getAllTable();
  console.log(result.rows);
  res.json({ content: result.rows });
  next();
});

//* get one question
app.get("/questions/:id", async (req, res) => {
  const result = await getQuestion(Number(req.params.id));
  res.json({ "This is just one question": result });
});
