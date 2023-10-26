import express from "express";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
const client = new pg.Client({
  database: "rep1",
});
const port = 3002;

await client.connect();
app.use(express.json());
app.use(express.static("public"));
//get request----------------------------------------------------------------------------------
app.get("/api", (req, res) => {
  client
    .query("SELECT * FROM test")
    .then((result) => {
      res.json(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(505);
    });
});

//delete route----------------------------------------------------------------
app.delete("/api/test/:id", (req, res) => {
  const id = Number(req.params.id);
  client
    .query("DELETE FROM test WHERE id = $1 RETURNING *", [id])
    .then((result) => {
      res.json(result.rows[0]);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
//patch routes
app.patch("/api/test/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  const name = req.body.name;
  client
    .query(
      `UPDATE test SET name = COALESCE ($1,name) WHERE id =$2 RETURNING *`,
      [name, id]
    )
    .then((data) => {
      if (data.rows.length === 0) {
        res.sendStatus(404);
      }
      console.log("updated entry:", data.rows[0]);
      res.send(data.rows[0]);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
app.listen(port, () => {
  console.log("listening on Port:", port);
});
