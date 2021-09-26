import axios from "axios";

export const url = "http://143.244.209.138";
export const idMaktab = "14";
export const user = "10";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};