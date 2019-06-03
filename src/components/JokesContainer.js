import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getJoke } from '../actions/getJoke'
import '../App.css'

class JokesContainer extends Component {
  state = {
    timesUp: false,
  }

  componentDidMount() {
    this.props.getJoke()
    setTimeout(this.replaceText, 5000)
  }

  replaceText = () => {
    this.setState({ timesUp: true })
  }

  render() {
    if (this.state.timesUp === false) {
      return (
        <div className="secondary-box">
          <h1 className='main-text'>{this.props.joke.setup}</h1>
        </div>
      )
    }
    else {
      return (
        <div className="secondary-box">
          <h5 className='setup'>{this.props.joke.setup}</h5>
          <h1 className='main-text'>{this.props.joke.punchline}</h1>
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return { joke: state.getJoke }
}

export default connect(mapStateToProps, { getJoke })(JokesContainer)