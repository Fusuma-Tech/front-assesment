import './Comment.css';

const Comment = (comment) => {
  return (
    <div className="Comment-container" key={comment.id}>
      <div className='Comment-Content'>
        <p><b>{comment.text}</b></p>
        <p><em>Written by {comment.user}</em></p>
      </div>
    </div>
  );
};

export default Comment;
