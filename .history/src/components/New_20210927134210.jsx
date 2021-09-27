import React , {useState}from 'react';


const New = ({blog , user ,setBlog }) => {
    const [state, setState] = useState(blog)

    return (
      <form>
      <h2>Add new blog</h2>
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
            value={user.id}
            name="user"
            readOnly={true}
/*
            onChange={({ target }) =>
              setState({
                ...state,
                [target.name]: target.value,
              })
            }
  */
          />
        </div>
        <div>
          {" "}
          Url:
          <input
            type="url"
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
            type="number"
            value={state.likes}
            name="likes"
            min = {0}
            onChange={({ target }) =>
              setState({
                ...state,
                [target.name]: target.value,
              })
            }
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    );
};

export default New;
