// This is your server file :)

import express, { Request, Response } from "express";
import path from "path";
import pageRouter from "./routes/page.routes";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../src/views"));

app.use("/", pageRouter);

app.use((req: Request, res: Response) => {
  res.status(404).send("page not found");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
