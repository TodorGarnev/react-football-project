import React from 'react'

const Comment = props => (
  <div>
    <div className='container border border-dark bg-white p-2 mb-1 text-dark rounded'>
      {props.text}

    </div>
    <button
      data-id={props.commentId}
      className='btn btn-info mb-4'
      onClick={() => props.deleteComment(props.commentId)}
    >Delete Me</button>
  </div>
)

export default Comment