import React, { Component } from 'react'
import './Page1.css'
import image from './images/avator.jpg'

class Hello extends Component {
  render() {
    return (
      <div className="page-box">
        page1
        <img src={image} width="100" height="100"/>
      </div>
    )
  }
}

export default Hello
