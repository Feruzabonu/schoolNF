import axios from "axios";

export const url = "http://143.244.209.138";
export const idMaktab = "2";
export const user = "5";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};