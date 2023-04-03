// Write your React code here.

import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isEmojiClicked: false}

  onEmojiClicking = () => {
    this.setState({
      isEmojiClicked: true,
    })
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="thanks-main-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h3 className="thankyou-heading">Thank You!</h3>
        <p className="para">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  renderEmojis = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div>
        <h1 className="main-heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="cards-list-container">
          {emojis.map(eachItem => (
            <li key={eachItem.id} className="list-details-container">
              <button
                className="button"
                type="button"
                onClick={this.onEmojiClicking}
              >
                <img
                  src={eachItem.imageUrl}
                  alt={eachItem.name}
                  className="emoji-url"
                />
              </button>
              <p className="emoji-name">{eachItem.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isEmojiClicked} = this.state
    return (
      <div className="main-bg-container">
        <div className="cards-main-container">
          {isEmojiClicked ? this.renderThankYou() : this.renderEmojis()}
        </div>
      </div>
    )
  }
}

export default Feedback
