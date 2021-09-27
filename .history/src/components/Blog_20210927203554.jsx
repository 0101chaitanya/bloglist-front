import React, {useState} from 'react'
import {putLikes} from "../services/blogs";
const Blog = ({ blog }) => {

  const [show ,setShow] = useState(false);
  

  const handlePut = async(e)=>{
    console.log(blog.likes);
const blog = await putLikes({
  blog,
  likes : blog.likes + 1
})
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
          Likes :<button onClick={handlePut}>{blog.likes} ❤️</button>
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