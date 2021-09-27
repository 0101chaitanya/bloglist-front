import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import {getAll, sendBlog,setToken} from './services/blogs'
import login from './services/login';
import New from './components/New';
import LoginForm from './components/LoginForm';
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
  useEffect( async() => {
     const blogs=  await getAll();
        setBlogs(blogs);
   }, [user]);

  
    
   const handleLogin = async(event) => {
     event.preventDefault()
    
    try {
      const data = await login({
        username, password,
      });
          window.localStorage.setItem('userBlogData', JSON.stringify(data))
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
      const loggedUserJSON = window.localStorage.getItem("userBlogData");
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
        <LoginForm
          handleLogin={handleLogin}
          username={username}
          password={password}
        />
      )}

      {user !== null && <p>{user} logged in</p> && (
        <New blog={blog} user={user} setBlogs={setBlogs} blogs={blogs} />
      )}

      {user && blogs.map((blog) => <Blog key={blog.id} blog={blog} />)}
    </div>
  );
}

export default App