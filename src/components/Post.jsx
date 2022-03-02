import Comment from './Comment';

const Post = (props) => {
  // Creamos el map para los post
  const postsListHTML = props.posts.map((eachPost) => (
    <>
    <li key={eachPost.id}>
      <p className="postName">{eachPost.name}</p>
      <p className="postUser">{eachPost.user}</p>
    </li>
    <Comment comments={props.comments} />
    </>
  ));

  const handleChangeName = (ev) => {
    props.setNewPost({
      ...props.newPost,
      name: ev.currentTarget.value,
    });
  };

  const handleChangeUser = (ev) => {
    props.setNewPost({
      ...props.newPost,
      user: ev.currentTarget.value,
    });
  };

  const handleClickPost = () => {
    props.setPosts([...props.posts, props.newPost]);
  };

  return (
    <section>
      <h3 className="postsTitle">Posts</h3>

      <ul className="ulPostStyles">{postsListHTML}</ul>

      <form className="form" onSubmit={(ev) => ev.preventDefault()}>
        <label htmlFor="post__label">Name</label>
        <input
          onChange={handleChangeName}
          value={props.newPost.name}
          type="text"
          id="form__input-post"
        />

        <label htmlFor="post__label">User</label>
        <input
          onChange={handleChangeUser}
          value={props.newPost.user}
          type="text"
          id="form__input-post"
        />

        <button onClick={handleClickPost} type="submit">
          New post
        </button>
      </form>
    </section>
  );
};

export default Post;
