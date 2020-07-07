import { CHANGE_LANG } from '../constants/ActionTypes'
/// #if USEDUMMY
import settings from 'Settings/dummy'
/// #else
import settings from 'Settings'
/// #endif

const lang = (state = settings.default_lang, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return action.lang
    default:
      return state
  }
}

export default lang
