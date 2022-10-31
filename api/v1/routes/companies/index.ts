import express, { Router } from "express";
import createCompany from "./CreateCompany.route";
import getCompanies from "./GetCompanies.route";
import updateCompany from "./UpdateCompany.route";
import getCompanyCards from "./GetCompanyCards.route";

const companiesRouter: Router = express.Router();

companiesRouter.post("/", createCompany);
companiesRouter.get("/", getCompanies);
companiesRouter.patch("/:companyId", updateCompany);
companiesRouter.get("/:companyId/cards", getCompanyCards);

export default companiesRouter;
