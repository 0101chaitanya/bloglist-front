import axios from 'axios'
const baseUrl = "http://localhost:3003/api/blogs";

let token = null;

const setToken = (newToken) => {
  token = "Bearer " + newToken.split(" ")[1];
};
const getAll = async() => {
   const config = {
     headers: { Authorization: token },
   };
  const request = await axios.get(baseUrl, condif)
  return request.data;
}

export  { getAll , setToken }