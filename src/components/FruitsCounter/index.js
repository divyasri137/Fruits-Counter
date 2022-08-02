// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMango = () => {
    const {mangoes} = this.state
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatBanana = () => {
    const {bananas} = this.state
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="container">
        <div className="container2">
          <h1 className="heading">
            Bob ate <span className="text">{mangoes} </span>
            mangoes <span className="text">{bananas} </span> bananas
          </h1>
          <div className="fruits">
            <div className="mangoes">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image1"
                alt="mango"
              />
              <button className="button" onClick={this.eatMango}>
                Eat Mango
              </button>
            </div>
            <div className="bananas">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image1"
                alt="banana"
              />
              <button className="button" onClick={this.eatBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
