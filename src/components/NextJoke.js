import React, { Component } from 'react'

export default class NextJoke extends Component {
  render() {
    return (
      <div>
        <button onClick={window.location.reload()}>
          Next Joke
        </button>
      </div>
    )
  }
}
