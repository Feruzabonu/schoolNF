import Global from "./Global";
import { httpRequest,  url } from "./Host";

export const getSchool = () => {
  var config = {
    url: `${url}/school/`,
    method: "get",
  };
  return httpRequest(config);
};
export const getNews = () => {
  var config = {
    url: `${url}/new/${Global.schoolId}/`,
    method: "get",
  };
  return httpRequest(config);
};

export const getEvents = () => {
  var config = {
    url: `${url}/event/${Global.schoolId}/`,
    method: "get",
  };
  return httpRequest(config);
};

export const createParent = (config) => {
  console.log(config);
  var configs = {
    url: `${url}/parent/`,
    method: "post",
    data: config,
  };
  return httpRequest(configs);
};

export const getClasses = () => {
  var config = {
    url: `${url}/class/`,
    method: "get",
  };
  return httpRequest(config);
};

export const getClassesBySchool = (id) => {
  var config = {
    url: `${url}/class-by-school/${id}`,
    method: "get",
  };
  return httpRequest(config);
};

export const getStaffBySchool = () => {
  var config = {
    url: `${url}/staff-by-school/${Global.schoolId}/`,
    method: "get",
  };
  return httpRequest(config);
};

export const getStaff = () => {
  var config = {
    url: `${url}/staff/${Global.staffId}/`,
    method: "get",
  };
  return httpRequest(config);
};

export const getSpec = () => {
  var config = {
    url: `${url}/spec/`,
    method: "get",
  };
  return httpRequest(config);
};

export const editStaff = (configs, id) => {
  var config = {
    url: `${url}/staff/${id}/`,
    method: "put",
    data: configs,
  };
  return httpRequest(config);
};

export const getPupils = (id) => {
  var config = {
    url: `${url}/pupil/${id}/`,
    method: "get",
  };
  return httpRequest(config);
};

export const getExcellent = (id) => {
  var config = {
    url: `${url}/excellent/${Global.schoolId}/`,
    method: "get",
  };
  return httpRequest(config);
};

export const createPupil = (configs) => {
  var config = {
    url: `${url}/pupil/`,
    method: "post",
    data: configs,
  };
  return httpRequest(config);
};

export const editPupils = (configs, id) => {
  var config = {
    url: `${url}/pupil/${id}/`,
    method: "put",
    data: configs,
  };
  return httpRequest(config);
};

export const deletePupils = (id) => {
  var config = {
    url: `${url}/pupil/${id}/`,
    method: "delete",
  };
  return httpRequest(config);
};

export const getAchivement = (id) => {
  var config = {
    url: `${url}/achiviment/${id}`,
    method: "get",
  };
  return httpRequest(config);
};

export const getPupil = (id) => {
  var config = {
    url: `${url}/pupil/`,
    method: "get",
  };
  return httpRequest(config);
};
