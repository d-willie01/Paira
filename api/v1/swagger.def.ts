import { swSignInRouter } from "./routes/auth/SignIn.route";
import { swSignUpRouter } from "./routes/auth/SignUp.route";
import { swCreateCardRouter } from "./routes/cards/CreateCard.route";
import { swGetCompanyCardsRouter } from "./routes/companies/GetCompanyCards.route";
import { swCreateCompanyRouter } from "./routes/companies/CreateCompany.route";
import { swGetSelfRouter } from "./routes/users/GetSelf.route";
import { swGetCardsRouter } from "./routes/cards/GetCards.route";
import { swUpdateCompanyCardKeys } from "./routes/companies/UpdateCompanyCardKeys.route";
import { swUpdateCardRoute } from "./routes/cards/UpdateCard.route";

const swaggerOptions = {
    openapi: '3.0.0',
    info: {
        title: 'Paira API',
        version: '0.1.0',
        description: 'Paira REST API Documentation'
    },
    servers: [
        {
            url: 'http://localhost:8080',
            description: 'Paira API Development Server'
        }
    ],
    paths: {
        ...swSignUpRouter,
        ...swCreateCompanyRouter,
        ...swSignInRouter,
        ...swGetSelfRouter,
        ...swCreateCardRouter,
        ...swGetCompanyCardsRouter,
        ...swGetCardsRouter,
        ...swUpdateCompanyCardKeys,
        ...swUpdateCardRoute
    }
}

export default swaggerOptions;