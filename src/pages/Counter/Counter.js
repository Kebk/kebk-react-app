import React, { Component } from 'react'
import store from '@/redux/store'
import { increment, decrement, reset } from '@/redux/actions/counter'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState().counter
    store.subscribe(this.handleStoreChange)
  }
  render() {
    return (
      <div>
        <div>当前计数(来自redux):{this.state.count}</div>
        <button onClick={this.handleIncrement}>自增</button>
        <button onClick={this.handleDecrement}>自减</button>
        <button onClick={this.handleReset}>重置</button>
      </div>
    )
  }

  handleIncrement() {
    store.dispatch(increment())
  }

  handleDecrement() {
    store.dispatch(decrement())
  }

  handleReset() {
    store.dispatch(reset())
  }

  handleStoreChange = () => {
    this.setState(store.getState().counter)
  }
}

export default Counter
