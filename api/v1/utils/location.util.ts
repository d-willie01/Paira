import { GeocodeRequest } from "@mapbox/mapbox-sdk/services/geocoding";
import { prop } from "@typegoose/typegoose";
import { getMapboxClient } from "../clients/mapbox.client";

export enum State {
    AL, AK, AZ, AR, CA, CO, CT, DE, FL, GA,
    HI, ID, IL, IN, IA, KS, KY, LA, ME, MD,
    MA, MI, MN, MS, MO, MT, NE, NV, NH, NJ,
    NM, NY, NC, ND, OH, OK, OR, PA, RI, SC,
    SD, TN, TX, UT, VT, VA, WA, WV, WI, WY,
    AS, DC, GU, MP, PR, VI
}

export class Address {
    @prop({ required: true })
    public street_1!: string;

    @prop({ required: false })
    public street_2?: string;

    @prop({ required: true })
    public city!: string;

    @prop({ required: true })
    public state!: State;

    @prop({ required: true, minlength: 5, maxlength: 5 })
    public zipCode!: string;
}

export class Location {
    @prop({ required: true, default: "Point" })
    public type!: "Point"

    @prop({ required: true })
    public coordinates!: number[];
}

export const getAddressString = (address: Address): string => {
    let addressString: string = "";
    if (address.street_1) addressString += `${address.street_1} `;
    if (address.street_2) addressString += `${address.street_2} `;
    if (address.city) addressString += `${address.city} `;
    if (address.state) addressString += `${address.state} `;
    if (address.zipCode) addressString += `${address.zipCode} `;
    return addressString.trim();
}

export const getCoordinatesByAddress = async (address: Address): Promise<number[]> => {
    const addressString = getAddressString(address);
    const mapbox = getMapboxClient();
    const geocodeRequestBody: GeocodeRequest = {
        query: addressString,
        types: ["address", "postcode"],
        countries: ["us"],
        limit: 1
    }
    try {
        const mapiResponse = await mapbox.forwardGeocode(geocodeRequestBody).send().then(res => res.body)
        return mapiResponse.features[0].center;
    } catch (err) {
        throw new Error(`error fetching coordinates from address ${addressString}`)
    }
}