import axios from 'axios';

const baseUrl = process.env.API_URL + "/skus";

export function getSkuByColorId(colorId) {
  const url = `${baseUrl}?colorId=${colorId}`;

  return axios.get(url)
    .then(response => (response.data.length > 0 ? response.data[0] : null));
}
