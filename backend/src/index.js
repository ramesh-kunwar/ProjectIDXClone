import express from "express";
import { PORT } from "./config/serverConfig.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/ping", (req, res) => {
  return res.send("ping");
});

app.listen(PORT || 3000, () => {
  console.log(`Server is running on port ${PORT}`);
});
