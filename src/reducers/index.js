import { combineReducers } from 'redux'
import userData from './userData'
import projectData from './projectData'
import lang from './lang'

const rootReducer = combineReducers({
  userData,
  projectData,
  lang
})

export default rootReducer
