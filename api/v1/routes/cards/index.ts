import express, { Router } from "express";
import createCard from "./CreateCard.route";
import getCards from './GetCards.route';
import updateCard from './UpdateCard.route';

const cardsRouter: Router = express.Router();

cardsRouter.post("/", createCard);
cardsRouter.get("/", getCards);
cardsRouter.patch("/:cardId", updateCard);

export default cardsRouter;
