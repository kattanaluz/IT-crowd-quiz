import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`The server is listening to the port ${PORT}`)
);

app.get("/", (req, res) => {
  res.sendFile("index");
});
