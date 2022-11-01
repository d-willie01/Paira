import express, { Router } from "express";
import signIn from "./SignIn.route";
import signUp from "./SignUp.route";

const authRouter: Router = express.Router();

authRouter.post("/signin", signIn);
authRouter.post("/signup", signUp);

export default authRouter;
