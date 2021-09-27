import React, {useState} from 'react'
const Blog = ({ blog }) => {

  const [show ,setShow] = useState(false);
  
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
     <p> {blog.title} {blog.user.name}</p> {}
      <button onClick={()=>setShow(!show)}>Show more</button>
      <div style={{display: show ? "" : "none"}}>
        <p>Likes :{blog.likes} ❤️</p>
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