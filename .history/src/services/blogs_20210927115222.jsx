import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null;

const setToken = (newToken) => {
  token = "Bearer " + newToken.split(" ")[1];
};
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

export default { getAll }