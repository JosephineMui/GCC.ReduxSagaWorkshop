import axios from 'axios';

const baseUrl = process.env.API_URL + "/grades";

export function getGrades() {

  return axios.get(baseUrl).then(response => response.data);
}

