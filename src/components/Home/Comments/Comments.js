import React from 'react'
import Comment from './Comment'

const Comments = props => {

  const commentsList = props.comments.map((comment, index) =>
    <Comment
      key={index}
      user={props.user}
      commentData={comment}
      deleteComment={props.deleteComment}
    />
  )

  return (
    <div className='jumbotron bg-secondary text-white'>
      <h4 className='container text-center bg-info p-4 mb-5'>
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
        {props.user._kmd ?
          (props.user._kmd.roles !== undefined && props.user._kmd.roles.length > 0) &&
          <button
            className='btn btn-info mt-4 w-100'
            onClick={props.deleteAllComments}
          >Delete all comments</button>
          : ''}
      </div>

    </div>
  )
}

export default Comments