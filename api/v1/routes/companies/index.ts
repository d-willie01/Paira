import express, { Router } from "express";
import createCompany from "./CreateCompany.route";
import updateCompany from "./UpdateCompany.route";
import updateCompanyAddress from "./UpdateCompanyAddress.route";
import updateCompanyCardKeys from "./UpdateCompanyCardKeys.route";
import getCompanyCards from "./GetCompanyCards.route";
import updateCompanyAvatar from "./UpdateCompanyAvatar.route";
import createCard from "./CreateCard.route";
import updateCard from './UpdateCard.route';
import addCardImages from './UploadCardImages.route'


const companiesRouter: Router = express.Router();

companiesRouter.post("/", createCompany);
companiesRouter.patch("/:companyId", updateCompany);
companiesRouter.patch("/:companyId/address", updateCompanyAddress);
companiesRouter.patch("/:companyId/avatar", updateCompanyAvatar);
companiesRouter.patch("/:companyId/cardKeys", updateCompanyCardKeys);
companiesRouter.get("/:companyId/cards", getCompanyCards);
companiesRouter.post("/:companyId/cards", createCard);
companiesRouter.patch("/:companyId/cards/:cardId", updateCard);
companiesRouter.post("/:companyId/cards/:cardId/images", addCardImages);

export default companiesRouter;
