import express, { Router } from "express";
import createCard from "./CreateCard.route";

const cardsRouter: Router = express.Router();

cardsRouter.post("/", createCard);

export default cardsRouter;
