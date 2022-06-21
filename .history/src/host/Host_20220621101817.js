import axios from "axios";

export const url = "https://api.maktab.abrorjonaxmadov.uz";
export const idMaktab = "11";
export const user = "19";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};