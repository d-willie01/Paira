import express, { Router } from "express";
import getCards from './GetCards.route';
import likeCard from './LikeCard.route';
import unlikeCard from './UnlikeCard.route';


const cardsRouter: Router = express.Router();

cardsRouter.get("/", getCards);
cardsRouter.patch("/:cardId/like", likeCard);
cardsRouter.patch("/:cardId/unlike", unlikeCard);

export default cardsRouter;
