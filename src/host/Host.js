import axios from "axios";

export const url = "http://143.244.209.138";
export const idMaktab = "6";
export const user = "38";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};