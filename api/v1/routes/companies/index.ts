import express, { Router } from "express";
import createCompany from "./CreateCompany.route";
import updateCompanyCardKeys from "./UpdateCompanyCardKeys.route";
import getCompanyCards from "./GetCompanyCards.route";

const companiesRouter: Router = express.Router();

companiesRouter.post("/", createCompany);
companiesRouter.patch("/:companyId/cardKeys", updateCompanyCardKeys);
companiesRouter.get("/:companyId/cards", getCompanyCards);

export default companiesRouter;
