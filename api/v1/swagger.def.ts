import { swSignInRouter } from "./routes/auth/SignIn.route";
import { swSignUpRouter } from "./routes/auth/SignUp.route";
import { swCreateCardRouter } from "./routes/companies/CreateCard.route";
import { swGetCompanyCardsRouter } from "./routes/companies/GetCompanyCards.route";
import { swCreateCompanyRouter } from "./routes/companies/CreateCompany.route";
import { swGetSelfRouter } from "./routes/users/GetSelf.route";
import { swGetCardsRouter } from "./routes/cards/GetCards.route";
import { swUpdateCompanyCardKeys } from "./routes/companies/UpdateCompanyCardKeys.route";
import { swUpdateCardRoute } from "./routes/companies/UpdateCard.route";
import { swUpdateCompanyAddress } from "./routes/companies/UpdateCompanyAddress.route";
import { swUpdateCompany } from "./routes/companies/UpdateCompany.route";
import { swUnlikeCard } from "./routes/cards/UnlikeCard.route";
import { swLikeCard } from "./routes/cards/LikeCard.route";
import { swSaveSearch } from "./routes/users/SaveSearch.route";
import { swDeleteSearch } from "./routes/users/DeleteSearch.route";
import { swUpdateUserAvatar } from "./routes/users/UpdateUserAvatar.route";
import { swUpdateCompanyAvatar } from "./routes/companies/UpdateCompanyAvatar.route";
import { swAddCardImages } from "./routes/companies/UploadCardImages.route";

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
        ...swUpdateCompany,
        ...swUpdateCompanyCardKeys,
        ...swUpdateCardRoute,
        ...swUpdateCompanyAddress,
        ...swLikeCard,
        ...swUnlikeCard,
        ...swSaveSearch,
        ...swDeleteSearch,
        ...swUpdateUserAvatar,
        ...swUpdateCompanyAvatar,
        ...swAddCardImages
    }
}

export default swaggerOptions;