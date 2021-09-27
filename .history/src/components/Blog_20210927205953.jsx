import React, {useState} from 'react'
import {putLikes} from "../services/blogs";
const Blog = ({ blog ,setBlogs, blogos }) => {

  const [show ,setShow] = useState(false);
  

  const handlePut = async(e)=>{
    console.log(blog);
const blogReceived = await putLikes({
  likes : blog.likes + 1
},blog._id);

console.log(blogReceived);
 
setBlogs({
  blogs:blogos.concat(blogReceived), 
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
          Likes :
          <button onClick={handlePut}>
            {blog.likes} <span role="img">❤️</span>
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