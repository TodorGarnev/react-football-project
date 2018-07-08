import React from 'react'

const Comment = props => (
  <div>
    <div className='container border border-info bg-info p-2 mb-1 textwhite rounded text-wrap'>
      <p className='w-100'>{props.text}</p>
    </div>
    <button
      data-id={props.commentId}
      className='btn btn-info mb-4'
      onClick={() => props.deleteComment(props.commentId)}
    >Delete Me</button>
  </div>
)

export default Comment