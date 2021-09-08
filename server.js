import express from "express";
import morgan from "morgan";
import config from "./config.js";

const app = express();

app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.json());

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});