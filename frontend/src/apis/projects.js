import axios from "../config/axiosConfig";
export const createProjectApi = async () => {
  try {
    const response = await axios.post("/api/v1/projects");
    console.log(Response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
