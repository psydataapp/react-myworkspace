import axios from "axios";

const openDataApi = {
  fetchHealthWtrIdx: () =>
    axios.get(`${process.env.REACT_APP_API_BASE}/opendata/healthwtridx`),
};

export default openDataApi;
