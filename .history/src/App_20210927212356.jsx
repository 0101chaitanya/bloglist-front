import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import {getAll, sendBlog,setToken} from './services/blogs'
import login from './services/login';
import New from './components/New';
import LoginForm from './components/LoginForm';
import Togglable from './components/Togglable';
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [user, setUser] = useState(null)

  ;
const [username, setUsername] = useState("");
const [password, setPassword] = useState(""); 
const [errorMessage, setErrorMessage] = useState("");

    const [state, setState] = useState({
      title: "",
       url: "",
      likes: "",
    });


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

    const handleSubmit = async (e) => {
      e.preventDefault();
      const resBlog = await sendBlog({ ...state, user: user.id });
   const blogs = await getAll();
   setBlogs(blogs);
   setState({
     title: "",
     url: "",
     likes: "",
   });
    };


  return (
    <div>
      <h2>blogs</h2>
      {user === null && (
        <Togglable buttonLabel="login">
          <LoginForm
            handleLogin={handleLogin}
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
          />
        </Togglable>
      )}

      {user !== null && <p>{user} logged in</p> && (
        <Togglable buttonLabel="add a new blog">
          <New state={state} handleSubmit={handleSubmit} setState={setState} />
        </Togglable>
      )}

      {user && blogs.map((blog) => <Blog key={blog.id} setBlogs={setBlogs} blogs={blogs} blog={blog} />)}
    </div>
  );
}

export default App