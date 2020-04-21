'use strict'

import React from 'react'
import ReactDom from 'react-dom'
import '../../common'
import logo from '../images/avator-10k.jpg'
import { A } from './tree-shaking'
import './index.less'

class Search extends React.Component {
  constructor() {
    super(...arguments)
    this.state = {
      Text: null,
    }
  }
  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default,
      })
    })
  }

  render() {
    const { Text } = this.state
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        Search Text12
        <img src={logo} onClick={this.loadComponent.bind(this)} />
      </div>
    )
  }
}

ReactDom.render(<Search />, document.getElementById('root'))
