import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.use("/api", authRouter);

app.listen(port, async () => {
  await connectDb();
  console.log(`Server is running on port ${port}`);
});
