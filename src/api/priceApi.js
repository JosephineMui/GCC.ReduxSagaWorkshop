import axios from 'axios';

const baseUrl = process.env.API_URL + "/prices";

export function getPrice(storeId, colorId) {

  const url = `${baseUrl}?storeId=${storeId}&colorId=${colorId}`;
  return axios.get(url)
    .then(response => (response.data.length > 0 ? response.data[0] : null));
}

