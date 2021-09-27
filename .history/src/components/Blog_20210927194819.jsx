import React, {useState} from 'react'
const Blog = ({ blog }) => {

  const [show ,setShow] = useState(false);
  
  return (<div>
    {blog.title} {blog.author}
    
  {/*   {{
      title,
      user,
      url,
      likes,
      
    }}
   */}</div>)
}

export default Blog