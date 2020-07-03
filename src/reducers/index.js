import { combineReducers } from 'redux'
import userData from './userData'
import lang from './lang'

const rootReducer = combineReducers({
  userData,
  lang
})

export default rootReducer
