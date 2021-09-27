import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null;

const setToken = (newToken) => {
  token = "Bearer " + newToken.split(" ")[1];
};
const getAll = async() => {
   const config = {
     headers: { Authorization: token },
   };
  const request = await axios.get(baseUrl)
  return request.data;
}

export  { getAll , setToken }