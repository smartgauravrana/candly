import axios, { AxiosRequestConfig } from "axios";
import { getCookie } from "cookies-next";

interface ApiCallConfig {
  method: string;
  url: string;
  data: object | null;
  params: object | null;
  headers: object;
}

export async function apiCall({
  method = "get",
  url,
  data,
  params,
  headers,
}: Partial<ApiCallConfig>) {
  const config: AxiosRequestConfig = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    url,
  };
  if (data) config.data = data;

  if (headers) {
    config.headers = { ...config.headers, ...headers };
  }

  appendAccessToken(config.headers);

  if (params) config.params = { ...config.params, ...params };

  const res = await axios(config);
  return res.data;
}

function appendAccessToken(headers = {}) {
  const accessToken = getCookie("jwt");

  if (accessToken) {
    headers["access-token"] = accessToken;
  }
}
