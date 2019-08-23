import counter from './reducers/counter'
import userInfo from './reducers/user'

export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action),
    userInfo: userInfo(state.userInfo, action)
  }
}
