import Comment from './Comment';

const Post = (props) => {
  // Creamos el map para los post
  const postsListHTML = props.posts.map((eachPost) => (
    <>
    <li key={eachPost.id}>
      <p className="postName">{eachPost.name}</p>
      <p className="postUser">{eachPost.user}</p>
    </li>
    <Comment setComments={props.setComments} setNewComment={props.setNewComment} newComment={props.newComment} comments={props.comments} />
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

      <form className="formNewPost" onSubmit={(ev) => ev.preventDefault()}>
        <label htmlFor="post__label">Post name</label>
        <input
          onChange={handleChangeName}
          className="newPostNameInput"
          value={props.newPost.name}
          type="text"
          id="form__input-post"
        />

        <label htmlFor="post__label">User</label>
        <input
          onChange={handleChangeUser}
          className="newPostUserInput"
          value={props.newPost.user}
          type="text"
          id="form__input-post"
        />

        <button className="buttonNewPost" onClick={handleClickPost} type="submit">
          New post
        </button>
      </form>
    </section>
  );
};

export default Post;
