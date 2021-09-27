import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import {getAll,setToken} from './services/blogs'
import login from './services/login';
import New from './components/New';
const App = () => {
  const [blogs, setBlogs] = useState([])

  const [blog, setBlog] = useState({ title: "", user: "", url: "", likes: "" });
const [username, setUsername] = useState("");
const [password, setPassword] = useState(""); 
const [errorMessage, setErrorMessage] = useState("");
const [user, setUser] = useState(null)
  useEffect(() => {
    if (user) {
      getAll().then((blogs) => {
        console.log(blogs);
        setBlogs(blogs);
      });
    }
  }, [user]);

    console.log(user);
    
   const handleLogin = async(event) => {
     event.preventDefault()
    
    try {
      const data = await login({
        username, password,
      })
      console.log("data",data)
      window.localStorage.setItem('userBlogUser', JSON.stringify(data))
        setUser(data.user);
      
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
      const loggedUserJSON = window.localStorage.getItem("userBlogUser");
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
      <New blog={blog}  setBlog={setBlog} /> }
     
      {user !== null && (<p>{user} logged in</p>)&&  
       blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
 
    </div>
  );
}

export default App