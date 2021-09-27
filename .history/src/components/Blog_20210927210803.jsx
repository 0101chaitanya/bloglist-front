import React, {useState} from 'react'
import {putLikes} from "../services/blogs";
const Blog = ({ blog ,setBlogs, blogs }) => {

  const [show ,setShow] = useState(false);
  
const [likes, setLikes] = useState(blog.likes);
  const handlePut = async(e)=>{
    console.log(blog);
const blogReceived = await putLikes({
  likes : blog.likes + 1
},blog._id);

const id = blog._id;
const modifiedBlogs = blog.map(blog => blog._id === id ? blog.likes + 1 : blog.likea) ;
setBlogs(modifiedBlogs) 
setLikes(
  blog.likes + 1, 
)
  
}
 const blogStyle = {
   paddingTop: 10,
   paddingLeft: 2,
   border: "solid",
   borderWidth: 1,
   marginBottom: 5,
 };
  
  console.log(blog)
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
            {likes}{" "}
            <span role="img" aria-label="likes">
              ❤️
            </span>
          </button>
        </p>
        <p>Url: {blog.url}</p>
        <p>{blog.user.username}</p>
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