import axios from 'axios';
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

export const deleteModule = async (moduleId: any) => {
  const response = await axios.delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export const createModule = async (courseNum: any, module: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseNum}/modules`,
    module
  );
  return response.data;
};

export const findModulesForCourse = async (courseNum: any) => {
  const response = await axios.get(`${COURSES_API}/${courseNum}/modules`);
  return response.data;
};

export const findModuleById = async (courseNum: any, moduleId: any) => {
  const response = await axios.get(`${COURSES_API}/${courseNum}/modules/${moduleId}`);
  return response.data;
};

export const updateModule = async (module: any) => {
  const response = await axios.put(`${MODULES_API}/${module._id}`, module);
  return response.data;
};
