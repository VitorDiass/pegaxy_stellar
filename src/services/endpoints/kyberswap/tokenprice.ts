import axios from "axios";

export const VIS_TOKEN = "0xcc1b9517460d8ae86fe576f614d091fca65a28fc";
export const PGX_TOKEN = "0xc1c93d475dc82fe72dbc7074d55f5a734f8ceeae";

const BASE_KYBERSWAP_URL = "https://aggregator-api.kyberswap.com";
const POLYGON_NETWORK = "polygon";
const TOKENS = "tokens";

export const VisPriceService = () => {
    return axios.get(`${BASE_KYBERSWAP_URL}/${POLYGON_NETWORK}/${TOKENS}?ids=${VIS_TOKEN}`);
};

export const PgxPriceService = () => {
    return axios.get(`${BASE_KYBERSWAP_URL}/${POLYGON_NETWORK}/${TOKENS}?ids=${PGX_TOKEN}`);
};
