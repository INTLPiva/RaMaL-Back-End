import express from "express";
import { routes } from "./src/routes";
import cors from "cors";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
