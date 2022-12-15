import axios from "axios";
const API_BASE = "http://localhost:4000";

export const login = async (email, password) => {
  let body = { email, password };
  let response = await axios.post(`${API_BASE}/login`, body);
  return response.data;
};

export const getAllUsers = async (email, password) => {
  let response = await axios.get(`${API_BASE}/getUsers`);
  console.log(response);
  return response.data;
};

export const profile = () =>
    axios.post(`${API_BASE}/profile`)
        .then(response => response.data);

export const deleteUser = async (userId) => {
    let response = await axios.delete(`${API_BASE}/users/${userId}`);
    console.log("Deleting user: ", userId);
    console.log(response);
    return response.data;
};