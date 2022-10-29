import createMapboxClient, { GeocodeService } from '@mapbox/mapbox-sdk/services/geocoding';

let mapboxClient: GeocodeService;
let isInitialized: boolean = false;

export const init = () => {
    mapboxClient = createMapboxClient({ accessToken: process.env.MAPBOX_TOKEN! });
    isInitialized = true;
}

export const mapboxIsInitialized = () => isInitialized;

export const getMapboxClient = () => mapboxClient;