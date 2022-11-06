import { getApiUrl } from "../utils";
import { apiCall } from "../utils/request";

export const getCurrentUser = () =>
  apiCall({
    url: getApiUrl("/profile"),
  });
