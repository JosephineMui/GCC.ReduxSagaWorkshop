import axios from 'axios';

const baseUrl = process.env.API_URL + "/handles";

export function getHandles() {

  return axios.get(baseUrl).then(response => response.data);
}

