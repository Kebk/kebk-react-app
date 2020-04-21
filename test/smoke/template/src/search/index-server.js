const React = require('react')
const ReactDom = require('react-dom')
const logo = require('../images/avator-10k.jpg')
require('./index.less')

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

module.exports = <Search />
