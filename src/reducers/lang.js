import { CHANGE_LANG } from '../constants/ActionTypes'

const lang = (state = null, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return action.lang
    default:
      return state
  }
}

export default lang
