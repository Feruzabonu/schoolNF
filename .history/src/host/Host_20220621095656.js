import axios from "axios";

export const url = "https://api.maktab.abrorjonaxmadov.uz";
export const idMaktab = "8";
export const user = "30";
export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};