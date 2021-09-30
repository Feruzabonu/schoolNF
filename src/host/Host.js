import axios from "axios";

export const url = "http://143.244.209.138";
export const idMaktab = "4";
export const user = "9";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};