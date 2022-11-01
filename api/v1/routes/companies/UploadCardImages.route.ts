import { Request, Response } from "express";
import * as UserService from '../../services/User.service';
import * as CompanyService from '../../services/Company.service';
import * as CardService from '../../services/Card.service';
import jwt from 'jsonwebtoken'
import Joi from "joi";
import j2s from 'joi-to-swagger';
import { transformCard } from "../../transformers/card.transformer";

export interface UploadCompanyAvatarRequest extends Request {
    auth?: jwt.JwtPayload;
    body: UploadCompanyAvatarRequestBody;
    params: {
        companyId: string;
        cardId: string;
    }
}
export interface UploadCompanyAvatarRequestBody {
    images: string[];
}

const schema = Joi.object().keys({
    image: Joi.string().required()
});

export default async (request: UploadCompanyAvatarRequest, response: Response): Promise<Response> => {
    try {
        const requester = await UserService.getUserByAuthProviderId(request.auth!.sub!);
        if (!requester) {
            return response.status(404).json({ error: "user not found" });
        };

        // checks if user belongs to company
        if (requester.company?._id.toString() !== request.params.companyId) {
            return response.status(403).json({ error: "you do not have sufficient privileges to update this company" })
        }

        // checks if user has contributor or greater access
        if (requester.role === undefined || requester.role > 1) {
            return response.status(403).json({ error: "you do not have sufficient privileges to update this company" })
        }

        const company = await CompanyService.getCompanyByCompanyId(request.params.companyId);
        if (!company) {
            return response.status(404).json({ error: "company not found" });
        }

        // TODO: upload images

        const updatedCard = await CardService.addCardImages(request.params.cardId, request.body.images)

        const updatedCardResponse = transformCard(updatedCard!)

        return response.status(200).json(updatedCardResponse);
    }
    catch (err) {
        console.error(err);
        return response.status(500).json({ error: err });
    }
}

export const swAddCardImages = {
    "/companies/{companyId}/card/{cardId}/images": {
        "post": {
            "summary": "add card images",
            "tags": ["/companies"],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            ...j2s(schema).swagger
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "success"
                },
                "403": {
                    "description": "unauthorized"
                },
                "404": {
                    "description": "user not found"
                },
                "500": {
                    "description": "internal server error"
                }
            }
        }
    }
}