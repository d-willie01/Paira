import express, { Request, Response } from "express";
import { loggingMiddlewear } from "./middlewear/logging.middlewear";
import * as mapBoxClient from "./clients/mapbox.client";
import * as mongoClient from "./clients/mongo.client";
import dotenv from "dotenv";
import cors from 'cors';
import { expressjwt } from "express-jwt";
import authRouter from "./routes/auth";
import companiesRouter from "./routes/companies";
import usersRouter from "./routes/users";
import swaggerUI from "swagger-ui-express";
import swaggerOptions from './swagger.def';
import cardsRouter from "./routes/cards";

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
var jwtFilter = function (req: Request) {
  if (req.path.includes("/auth")) {
    return true;
  }
  if (req.path.includes("/docs")) {
    return true;
  }
  return false
}

app.use(expressjwt({ secret: process.env.AUTH0_CLIENT_SECRET!, algorithms: ["HS256"] })
  .unless(jwtFilter));

app.use("/auth", authRouter);
app.use("/cards", cardsRouter);
app.use("/companies", companiesRouter);
app.use("/users", usersRouter);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerOptions));

app.use(function (err: any, req: Request, res: Response, next: any) {
  if (err.name === "UnauthorizedError") {
    console.error(err);
    res.status(401).send({ error: "invalid_token" });
  } else {
    next(err);
  }
});

mongoClient.init();

mapBoxClient.init();


app.listen(process.env.PORT, () =>
  console.log(`server has started at port ${process.env.PORT}`)
);
