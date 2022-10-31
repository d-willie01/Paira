import express, { Router } from "express";
import createCompany from "./CreateCompany.route";
import updateCompany from "./UpdateCompany.route";
import updateCompanyAddress from "./UpdateCompanyAddress.route";
import updateCompanyCardKeys from "./UpdateCompanyCardKeys.route";
import getCompanyCards from "./GetCompanyCards.route";

const companiesRouter: Router = express.Router();

companiesRouter.post("/", createCompany);
companiesRouter.patch("/:companyId", updateCompany);
companiesRouter.patch("/:companyId/address", updateCompanyAddress);
companiesRouter.patch("/:companyId/cardKeys", updateCompanyCardKeys);
companiesRouter.get("/:companyId/cards", getCompanyCards);

export default companiesRouter;
