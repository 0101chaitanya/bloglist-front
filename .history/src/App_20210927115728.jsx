import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import login from './services/login';
const App = () => {
  const [blogs, setBlogs] = useState([])
const [username, setUsername] = useState("");
const [password, setPassword] = useState(""); 
const [errorMessage, setErrorMessage] = useState("");
const [user, setUser] = useState(null)
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

   const handleLogin = async(event) => {
     event.preventDefault()
    
    try {
      const data = await login.login({
        username, password,
      })
      window.localStorage.setItem('userBlogUser', JSON.stringify(data))
      blogService.setToken(data.token);
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
        setUser(user);
        blog.setToken(user.token);
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
      {user !== null && blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
    </div>
  );
}

export default App