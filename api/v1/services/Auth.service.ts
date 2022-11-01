import axios, { AxiosRequestConfig } from 'axios';
import { BadRequestError, InvalidCredentialsError, InvalidEmailError, PasswordStrengthError, TooManyAttemptsError } from '../utils/errors.util';

export type SignInPayload = {
    email: string;
    password: string;
}

export type SignInReponse = {
    access_token: string;
    id_token: string;
}
export const SignIn = async (payload: SignInPayload): Promise<SignInReponse> => {
    try {
        const SignInResponse = await axios.post(`${process.env.AUTH0_ISSUER_BASE_URL}/oauth/token`,
            {
                grant_type: "http://auth0.com/oauth/grant-type/password-realm",
                realm: 'Username-Password-Authentication',
                client_id: process.env.AUTH0_CLIENT_ID,
                client_secret: process.env.AUTH0_CLIENT_SECRET,
                username: payload.email,
                password: payload.password
            },
            {
                responseType: "json",
                headers: {
                    "Accept": "application/json"
                }
            });
        return SignInResponse.data;
    } catch (err: any) {
        if (err.response.data.error === "invalid_grant") {
            throw new InvalidCredentialsError(err.response.data.error_description);
        } else if (err.response.statusText === "Too Many Requests") {
            throw new TooManyAttemptsError(err.response.data.error, err.response.data.error_description);
        } else {
            throw err;
        }
    }
}

export type SignUpPayload = {
    email: string;
    password: string;
};
export const SignUp = async (payload: SignUpPayload) => {
    try {
        const url: string = `${process.env.AUTH0_ISSUER_BASE_URL}/dbconnections/signup`;
        const data = {
            client_id: process.env.AUTH0_CLIENT_ID,
            connection: "Username-Password-Authentication",
            email: payload.email,
            password: payload.password
        };
        const config: AxiosRequestConfig = {
            responseType: "json",
            headers: {
                "Accept": "application/json"
            }
        };

        const newUser = await axios.post(url, data, config);
        return newUser.data;
    } catch (err: any) {
        if (err.response.data.name === "PasswordStrengthError") {
            throw new PasswordStrengthError(err.response.data.message, err.response.data.policy);
        } else if (err.response.data.error?.includes("error in email")) {
            throw new InvalidEmailError(err.response.data.error);
        } else if (err.response.data.name == "BadRequestError") {
            throw new BadRequestError("Invalid Auth0 Sign Up")
        } else {
            throw err;
        }
    }
};
