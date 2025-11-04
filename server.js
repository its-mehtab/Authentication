import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  console.log("get request!");

  res.send(200);
});

app.listen(port, async () => {
  await connectDb();
  console.log(`app is running on ${port}`);
});
