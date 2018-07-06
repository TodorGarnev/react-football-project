import React, { Component } from 'react'
import Match from './Match'
import Comments from './Comments'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render = () => (
    <div>
      <Match />
      <Comments />
    </div>
  )
}