import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getTechniquesFromApi = async () => {
  const response = await axios.get(`${apiUrl}/techniques`);
  return response;
}

export const getSingleTechniqueFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/techniques/technique/${id}`);
  return response;
}

export const postTechniqueToApi = async (technique) => {
  const response = await axios.post(`${apiUrl}/techniques/technique`, technique);
  return response;
}

export const updateTechniqueToApi = async (technique) => {
  const response = await axios.put(`${apiUrl}/technques/technique/${technique._id}`, technique);
  return response;
}

export const deleteTechniqueFromApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/techniques/technique/${id}`);
  return response;
}