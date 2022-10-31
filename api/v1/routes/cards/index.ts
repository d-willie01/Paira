import express, { Router } from "express";
import createCard from "./CreateCard.route";
import getCards from './GetCards.route';
import updateCard from './UpdateCard.route';
import likeCard from './LikeCard.route';
import unlikeCard from './UnlikeCard.route';


const cardsRouter: Router = express.Router();

cardsRouter.post("/", createCard);
cardsRouter.get("/", getCards);
cardsRouter.patch("/:cardId", updateCard);
cardsRouter.patch("/:cardId/like", likeCard);
cardsRouter.patch("/:cardId/unlike", unlikeCard);

export default cardsRouter;
