import React from 'react'

const Comment = props => (
  <div>
    <div className='container border border-info bg-info p-2 mb-3 textwhite rounded'>
      <p className='w-100'>
        {props.commentData.comment}
        <span className='text-right d-block'>- {props.commentData.author}</span>
      </p>
    </div>
    {props.user._kmd ?
      (props.user._kmd.roles !== undefined && props.user._kmd.roles.length > 0) &&
      <button
        className='btn btn-info mb-4'
        onClick={() => props.deleteComment(props.commentData._id)}
      >Delete</button>
      : ''}

  </div>
)

export default Comment