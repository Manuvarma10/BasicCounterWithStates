import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 5}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button Has been clicked <br />
          <span className="countStyle">{count} </span>
          times
        </h1>
        <p className="description">Click the button to increase the Count</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Click me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
