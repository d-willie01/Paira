import express, { Router } from "express";
import getSelf from "./GetSelf.route";

const usersRouter: Router = express.Router();

usersRouter.get("/self", getSelf);

export default usersRouter;
