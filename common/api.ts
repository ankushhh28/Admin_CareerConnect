import axios from "axios";
import { ApiOptions } from "./types";

export const apiCall = async ({
  method = "GET",
  params,
  data,
  headers,
  path,
}: ApiOptions) => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  try {
    const requestUrl = `${BASE_URL}${path}`;
    const response = await axios({
      method,
      url: requestUrl,
      params,
      data,
      headers,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
