import express from "express";

const app = express();
const port = 4000;

app.get("/hello", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
