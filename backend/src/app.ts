import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { connectMongoDB } from "./config/database";
import { errorHandler, notFound } from "./middleware/errorHandler";
import { authRoute } from "./routes";

dotenv.config();
const app = express();

const middleware = [
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
];

app.use(middleware);
//server connect
connectMongoDB();
app.get("/", (req: Request, res: Response) => {
  res.send("API IS RUNNING...");
});

// // application routes
app.use("/api/auth", authRoute);

// Use Middleware
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 400;
app.listen(port, () => {
  console.log(`api is ready on http://localhost:${port}`);
});
