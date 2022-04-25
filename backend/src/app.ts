import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import path from "path";
import { connectMongoDB } from "./config/database";
import { errorHandler, notFound } from "./middleware/errorHandler";
import { EmployeeRoute } from "./routes";

const bodyParser = require("body-parser");

dotenv.config();
const app = express();

const middleware = [
  bodyParser.urlencoded({
    extended: true,
  }),
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
];

app.use(middleware);
// Static Middleware
app.use(express.static(path.join(__dirname, "public")));
//server connect
connectMongoDB();
app.get("/", (req: Request, res: Response) => {
  res.send("API IS RUNNING...");
});

// // application routes
// app.use("/api/auth", authRoute);
app.use("/api/employee", EmployeeRoute);

// Use Middleware
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 400;
app.listen(port, () => {
  console.log(`api is ready on http://localhost:${port}`);
});
