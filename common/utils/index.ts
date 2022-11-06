import config from "../config";

export const getApiUrl = (url = "") => `${config.BASE_URL}${url}`;
