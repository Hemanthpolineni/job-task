import api from "./api";


export const getHome = async () => {
  const response = await api.get("/");
  return response.data;
};


export const getJobs = async () => {
  const response = await api.get("/jobs");
  return response.data;
};


export const getLimitedJobs = async (limit) => {
  const response = await api.get(`/jobs?limit=${limit}`);
  return response.data;
};

export const addJob = async (jobData) => {
  const response = await api.post("/jobs",jobData);
  return response.data
};

export const delJob = async (id) =>{
  const response = await api.delete(`/jobs/${id}`);
  return response.data
}