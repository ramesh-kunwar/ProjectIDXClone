import express from "express";
import { PORT } from "./config/serverConfig.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${PORT || 3000}`);
});
