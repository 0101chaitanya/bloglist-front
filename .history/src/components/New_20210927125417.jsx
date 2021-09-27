const New = ()=>{

    return(
        <form>
    <div>
          Title:
            <input
            type="text"
            value={title}
            name="title"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          User:
            <input
            type="text"
            value={user}
            name="user"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>

<div>          Url:
            <input
            type="text"
            value={url}
            name="url"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          Likes:
            <input
            type="text"
            value={likes}
            name="likes"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
      
        <button type="submit">login</button>
        </form>
    )
}