import axios from "axios";

export const url = "http://62.209.143.146:8003";
export const idMaktab = "2";
export const user = "5";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};