import React from 'react'
import Comment from './Comment'

const Comments = props => {

  const commentsList = props.comments.map((comment, index) =>
    <Comment
      key={index}
      author={comment.author}
      commentId={comment._id}
      text={comment.comment}
      deleteComment={props.deleteComment}
    />
  )

  return (
    <div className='jumbotron bg-secondary text-white'>
      <h4 className='container text-center bg-info p-2 mb-4 rounded'>
        What are your thoughts about this game?
    </h4>
      <div className='container'>
        {commentsList}
      </div>
      <div className="container">
        <textarea
          className='w-100 p-2 border border-dark rounded'
          value={props.currentComment}
          onChange={props.handleChange}
          rows='4'
        />
        <button
          className='btn btn-info mb-3'
          onClick={props.addComment}
        >Add comment</button>
      </div>

    </div>
  )
}

export default Comments