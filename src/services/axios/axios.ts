import axios, { AxiosResponse } from "axios";
import { LogService } from "../log/LogService";
import { IRequest } from "./interface/IRequest";

export const makeRequest = async <T>(props: IRequest): Promise<AxiosResponse<T, any> | undefined> => {

  try {
    let header : Record<string,string> = {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
    }
    props.method = props.method ?? "GET";
    // const response = await axios({url, method, data, headers });
    const response = await axios({ url: props.url, data: props.data, method: props.method, headers: props.headers ? props.headers : header });


    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    throw new Error("An error occurred");
  } catch (error) {
    LogService.log(error as Error);
  }
};
