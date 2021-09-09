import express from "express";
import morgan from "morgan";
import config from "./config.js";
import apiRoutes from "./apiRouter.js";
import path from "path";

let __dirname = path.resolve();

const app = express();

app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.json());

app.use("/api", apiRoutes);

app.get('/exercise', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/exercise.html'))
);

app.get('/stats', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/stats.html'))
);

app.listen(config.port, () => {
  console.log(`Server running at: http://localhost:${config.port}`);
});