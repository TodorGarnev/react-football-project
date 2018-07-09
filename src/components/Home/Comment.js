import React from 'react'

const Comment = props => (
  <div>
    <div className='container border border-info bg-info p-2 mb-1 textwhite rounded text-wrap'>
      <div className='w-100'>
        {props.text}
        <div className='text-right'>- {props.user}</div>
      </div>
    </div>
    <button
      data-id={props.commentId}
      className='btn btn-info mb-4'
      onClick={() => props.deleteComment(props.commentId)}
    >Delete</button>
  </div>
)

export default Comment