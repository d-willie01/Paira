import express, { Router } from "express";
import createCard from "./CreateCard.route";
import getCards from './GetCards.route';

const cardsRouter: Router = express.Router();

cardsRouter.post("/", createCard);
cardsRouter.get("/", getCards)

export default cardsRouter;
