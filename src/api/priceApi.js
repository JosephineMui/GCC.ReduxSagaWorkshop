import axios from 'axios';

const baseUrl = process.env.API_URL + "/prices";

export function getPrice(gradeId, colorId) {

  const url = `${baseUrl}?gradeId=${gradeId}&colorId=${colorId}`;
  return axios.get(url)
    .then(response => (response.data.length > 0 ? response.data[0] : null));
}

