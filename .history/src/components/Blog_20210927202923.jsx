import React, {useState} from 'react'
const Blog = ({ blog }) => {

  const [show ,setShow] = useState(false);
  

  
  console.log(blog)
  return (
    <div>
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