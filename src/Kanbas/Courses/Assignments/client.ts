import axios from 'axios';
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const deleteAssignment = async (moduleId: string) => {
  const response = await axios.delete(`${ASSIGNMENTS_API}/${moduleId}`);
  return response.data;
};

export const createAssignment = async (courseId: string, assignments: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignments
  );
  return response.data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};

export const updateAssignment = async (assignments: any) => {
  const response = await axios.put(`${ASSIGNMENTS_API}/${assignments._id}`, assignments);
  return response.data;
};
