import axios from 'axios';

const baseUrl = process.env.API_URL + "/stores";

export function getStores() {

  return axios.get(baseUrl);
}

