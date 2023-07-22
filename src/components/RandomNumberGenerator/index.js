// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumber extends Component {
  state = {count: 0, isClicked: true}

  btnClicked = () => {
    console.log('working')
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => {
      count: prevState.count + randomNumber
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="small-container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button onClick={this.btnClicked}>Generate</button>
          <p className="count-value">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumber
