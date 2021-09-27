import React, {useState} from 'react'
const Blog = ({ blog }) => {

  const [show ,setShow] = useState(false);
  console.log(blog)
  return (<div>
    {blog.title} {blog.author}
  {/*   
  {   title,
      user.username,
      url,
      likes,
      } */}</div>)
}

export default Blog