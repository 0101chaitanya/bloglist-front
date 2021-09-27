import React, {useState} from 'react'
const Blog = ({ blog }) => {

  const [show ,setShow] = useState(false);
  

  
  console.log(blog)
  return (
    <div>
     <blockquote cite={blog.url}> {blog.title} {blog.user.name}</blockquote> {}
      <button onClick={()=>setShow(!show)}>Show more</button>
      <div style={{display: show ? "" : "none"}}>
        <p>Likes :{blog.likes} ❤️</p>
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