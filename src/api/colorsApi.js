import axios from 'axios';

const baseUrl = process.env.API_URL + "/colors";

export function getColors(colorIds) {

  const params = colorIds.join('&id=')
  const url = `${baseUrl}?id=${params}`;
  return axios.get(url);
}

