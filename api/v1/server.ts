import express, { Request, Response } from "express";
import { loggingMiddlewear } from "./middlewear/logging.middlewear";
import * as mongoClient from "./clients/mongo.client";
import dotenv from "dotenv";
import cors from 'cors';
import { expressjwt } from "express-jwt";
import authRouter from "./routes/auth";
import companiesRouter from "./routes/companies";
import usersRouter from "./routes/users";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use(loggingMiddlewear);
app.use(expressjwt({ secret: process.env.AUTH0_CLIENT_SECRET!, algorithms: ["HS256"] }).unless({ path: ["/auth/signup", "/auth/signin"] }));

app.use("/auth", authRouter);
app.use("/companies", companiesRouter);
app.use("/users", usersRouter)

app.use(function (err: any, req: Request, res: Response, next: any) {
  if (err.name === "UnauthorizedError") {
    console.error(err);
    res.status(401).send({ error: "invalid_token" });
  } else {
    next(err);
  }
});

mongoClient.init();

app.listen(process.env.PORT, () =>
  console.log(`server has started at port ${process.env.PORT}`)
);