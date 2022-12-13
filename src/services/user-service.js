import axios from "axios";
const API_BASE = "http://localhost:4000";

export const login = async (email, password) => {
  let body = { email, password };
  let response = await axios.post(`${API_BASE}/login-user`, body);
  return response.data;
};

export const getAllUsers = async (email, password) => {
  let response = await axios.get(`${API_BASE}/getUsers`);
  console.log(response);
  return response.data;
};
