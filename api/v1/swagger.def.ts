import { swSignInRouter } from "./routes/auth/SignIn.route";
import { swSignUpRouter } from "./routes/auth/SignUp.route";
import { swCreateCompanyRouter } from "./routes/companies/CreateCompany.route";

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
        ...swCreateCompanyRouter,
        ...swSignUpRouter,
        ...swSignInRouter
    }
}

export default swaggerOptions;