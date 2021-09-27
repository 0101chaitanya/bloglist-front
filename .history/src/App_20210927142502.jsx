import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import {getAll, sendBlog,setToken} from './services/blogs'
import login from './services/login';
import New from './components/New';
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  const [blog, setBlog] = useState({
    title: "",
    user:  "",
    url: "",
    likes: "",
  });
const [username, setUsername] = useState("");
const [password, setPassword] = useState(""); 
const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (user) {
      getAll().then((blogs) => {
        console.log(blogs);
        setBlogs(blogs);
      });
    }
  }, [user]);

  
    console.log("user" ,user);
    
   const handleLogin = async(event) => {
     event.preventDefault()
    
    try {
      const data = await login({
        username, password,
      })
      console.log("data",data)
      window.localStorage.setItem('userBlogData', JSON.stringify(data))
        setUser(data.user);
      setBlog({
        ...blog,
        user : data.user.id
      })
      setToken(data.token);
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  };

    useEffect( async () => {
      const loggedUserJSON = window.localStorage.getItem("userBlog");
      if (loggedUserJSON) {
        const data = JSON.parse(loggedUserJSON);
        setUser(data.user);
        setToken(data.token);
      }
    }, []);

  return (
    <div>
      <h2>blogs</h2>
      {user === null && (
        <form onSubmit={handleLogin}>
          <div>
            username:{" "}
            <input
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            password:{" "}
            <input
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">login</button>
        </form>
      )}

       {user !== null && (<p>{user} logged in</p>)&&  
      <New blog={blog}  user= {user} setBlog={setBlog} /> }
     
      {user !== null && (<p>{user} logged in</p>)&&  
       blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
 
    </div>
  );
}

export default App