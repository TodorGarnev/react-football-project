import React from 'react'

const MatchControler = props => (
  <div className='container ml-auto mr-auto bg-secondary p-4'>
    <div className='d-sm-flex w-100 justify-content-between'>
      <div className='team-one w-100 mr-5'>
        <input
          name='teamOneName'
          type='text'
          placeholder='Team 1 name'
          value={props.game.teamOneName || ''}
          className='form-control mb-1'
          onChange={props.handleChange}
        />
        <input
          name='teamOneScore'
          type='number'
          min='0'
          value={props.game.teamOneScore || 0}
          className='form-control mb-1'
          onChange={props.handleChange}
        />
      </div>
      <div className='team-two w-100'>
        <input
          name='teamTwoName'
          type='text'
          placeholder='Team 2 name'
          value={props.game.teamTwoName || ''}
          className='form-control mb-1'
          onChange={props.handleChange}
        />
        <input
          name='teamTwoScore'
          type='number'
          min='0'
          value={props.game.teamTwoScore || 0}
          className='form-control mb-1'
          onChange={props.handleChange}
        />
      </div>
    </div>
    <button
      className='btn btn-info mt-4 w-100'
      onClick={props.addGame}
    >Save</button>
  </div >
)

export default MatchControler