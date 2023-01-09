
export default function Comment({ comment }) {
    return (

        <div className="Comment-container">
            <div className="Comment-name">{comment.user}</div>
            <div>{comment.text}</div>

        </div>
   )
}