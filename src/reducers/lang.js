import { CHANGE_LANG } from '../constants/ActionTypes'
import settings from '../../settings'

const lang = (state = settings.default_lang, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return action.lang
    default:
      return state
  }
}

export default lang
