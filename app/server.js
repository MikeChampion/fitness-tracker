import express from "express";
import morgan from "morgan";
import config from "./config.js";
import apiRoutes from "./apiRouter.js";

const app = express();

app.use(morgan("dev"));

app.use(express.static("public", { extensions: ["html"] }));
app.use(express.json());

app.use("/api", apiRoutes);

app.listen(config.port, () => {
  console.log(`Server running at: http://localhost:${config.port}`);
});