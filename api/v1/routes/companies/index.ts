import express, { Router } from "express";
import createCompany from "./CreateCompany.route";
import getCompanies from "./GetCompanies.route";
import updateCompany from "./UpdateCompany.route";

const companiesRouter: Router = express.Router();

companiesRouter.post("/", createCompany);
companiesRouter.get("/", getCompanies);
companiesRouter.patch("/:companyId", updateCompany);

export default companiesRouter;
