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
  const request = await axios.get(baseUrl, config)
  return request.data;
}


const sendBlog = async (payload) => {

console.log(token)
  const config = {
    headers: { Authorization: token },
  };
  const request = await axios.post(baseUrl,{...payload}, config);
  return request.data;
};
const putLikes = async (payload, id) => {
  console.log(token);
  const config = {
    headers: { Authorization: token },
  };
  const request = await axios.put(baseUrl+"/"+ id, { ...payload }, config);
  return request.data;
};
const deleteRequest = async(id) => {
  console.log(token);
  const config = {
    headers: { Authorization: token },
  };
  const request = await axios.delete(baseUrl + "/" + id, config);
  return request.data;
};


export  { getAll , setToken ,sendBlog ,putLikes, deleteRequest }