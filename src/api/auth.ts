import { request } from "./_axios";
import { ILoginRequest, IRegisterRequest } from "../types/auth.types";
import { LOGIN_URL, REGISTER_URL } from "../constant";

export const loginAPI = (loginDetails: ILoginRequest) =>
  request({ url: LOGIN_URL, method: "POST", data: loginDetails });

export const registerAPI = (registerDetails: IRegisterRequest) =>
  request({ url: REGISTER_URL, method: "POST", data: registerDetails });
