import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses";

// get all modules of a course
export const findModulesForCourse = async (courseId) => {
    const url = `${COURSES_URL}/${courseId}/modules`;
    const response = await axios.get(url);
    return response.data;
  };
  


// create module
export const createModule = async (courseId, module) => {
    const response = await axios.post(
      `${COURSES_URL}/${courseId}/modules`,
      module
    );
    return response.data;
  };

// delete module
const MODULES_URL = "http://localhost:4000/api/modules";

export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

// update module

export const updateModule = async (module) => {
    const response = await axios.
      put(`${MODULES_URL}/${module._id}`, module);
    return response.data;
};
  


