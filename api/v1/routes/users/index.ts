import express, { Router } from "express";
import getSelf from "./GetSelf.route";
import saveSearch from "./SaveSearch.route";
import deleteSearch from "./DeleteSearch.route";
import updateUserAvatar from "./UpdateUserAvatar.route"

const usersRouter: Router = express.Router();

usersRouter.get("/self", getSelf);
usersRouter.post("/:userId/searches", saveSearch)
usersRouter.delete("/:userId/searches/:searchId", deleteSearch)
usersRouter.patch("/:userId/avatar", updateUserAvatar)

export default usersRouter;
