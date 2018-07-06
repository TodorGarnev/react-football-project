import React from 'react'
import Comment from './Comment'

const Comments = () => (
  <div className='jumbotron bg-secondary text-white'>
    <h4 className='container text-center bg-info p-2 mb-4 rounded'>
      What are your thoughts about this game?
    </h4>
    <div className='container'>
      <Comment />
      <Comment />
    </div>
  </div>
)

export default Comments