import React, { Component } from 'react'

class Hello extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <div>Hello world</div>
        <div>当前计数:{this.state.count}</div>
        <button onClick={this.handleClick}>增加</button>
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      count: ++this.state.count
    })
  }
}

export default Hello
