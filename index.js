import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const MONGODB_URL =
  "mongodb+srv://adventuraS:vsL3I4m59wCfLrpJ@cluster0.wlf4d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const port = 5000;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => console.log(`${err} did not connect`));
