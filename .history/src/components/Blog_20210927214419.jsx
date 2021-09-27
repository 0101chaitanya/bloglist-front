import React, {useState} from 'react'
import {putLikes ,deleteRequest} from "../services/blogs";
const Blog = ({ blog ,setBlogs, blogs }) => {

  const [show ,setShow] = useState(false);
  
  const handlePut = async(e)=>{
    
await putLikes({
  likes : blog.likes + 1
},blog._id);

const id = blog._id;
const modifiedBlogs = blogs.map(blog => blog._id === id ? {
  ...blog,
  likes:blog.likes + 1} : blog) ;
setBlogs(modifiedBlogs) 
  

}

const deleteMe = async()=>{

   await deleteRequest(blog._id);
const id = blog._id;
const modifiedBlogs = blogs.filter((blog) =>
  blog._id !== id
    
);
setBlogs(modifiedBlogs); 

}
 const blogStyle = {
   paddingTop: 10,
   paddingLeft: 2,
   border: "solid",
   borderWidth: 1,
   marginBottom: 5,
 };
  
  return (
    <div style={blogStyle}>
      <p>
        {" "}
        {blog.title} {blog.user.name}
      </p>{" "}
      {}
      <button onClick={() => setShow(!show)}>Show more</button>
      <div style={{ display: show ? "" : "none" }}>
        <p>
          Likes :
          <button onClick={handlePut}>
            {blog.likes}{" "}
            <span role="img" aria-label="likes">
              ❤️
            </span>
          </button>
        </p>
        <p>Url: {blog.url}</p>
        <p>{blog.user.username}</p>
        <button onClick={deleteMe}>Delete</button>
      </div>
      {/*   
  {   title,
      user.username,
      url,
      likes,
      } */}
    </div>
  );
}

export default Blog