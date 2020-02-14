import axios from 'axios';

const baseUrl = process.env.API_URL + "/products";

export function getProducts() {

  return axios.get(baseUrl);
}

