import React , {useState}from 'react';


const New = () => {
    const [state, setState] = useState({
title: "",
user: "",
url: "",    
likes : "",        
    });;
    return (
      <form>
        <div>
          Title:
          <input
            type="text"
            value={state.title}
            name="title"
            onChange={({ target }) =>
              setState({
                ...state,
                [target.name]: target.value,
              })
            }
          />
        </div>
        <div>
          User:
          <input
            type="text"
            value={state.user}
            name="user"
            onChange={({ target }) =>
              setState({
                ...state,
                [target.name]: target.value,
              })
            }
          />
        </div>

        <div>
          {" "}
          Url:
          <input
            type="text"
            value={state.url}
            name="url"
            onChange={({ target }) =>
              setState({
                ...state,
                [target.name]: target.value,
              })
            }
          />
        </div>
        <div>
          Likes:
          <input
            type="text"
            value={state.likes}
            name="likes"
            onChange={({ target }) =>
              setState({
                ...state,
                [target.name]: target.value,
              })
            }
          />
        </div>

        <button type="submit">login</button>
      </form>
    );
};
