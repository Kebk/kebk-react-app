import { combineReducers } from 'redux'

import counter from './reducers/counter'
import userInfo from './reducers/user'

export default combineReducers({
  counter,
  userInfo
})
