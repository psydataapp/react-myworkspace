import axios from "axios";

const promiseApi = {
  add: (data) => axios.post(`${process.env.REACT_APP_API_BASE}/promise`, data),
  fetch: () => axios.get(`${process.env.REACT_APP_API_BASE}/promise`),
  remove: (id) =>
    axios.delete(`${process.env.REACT_APP_API_BASE}/promise/${id}`),
  modify: (data) =>
    axios.put(`${process.env.REACT_APP_API_BASE}/promise/${data.id}`, data),
};
export default promiseApi;
