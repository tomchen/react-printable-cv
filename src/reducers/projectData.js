import { CHANGE_LANG, IMPORT_JSON } from '../constants/ActionTypes'
import settings from '../../settings'

import defaultDataEn from '../../data/project-list/en.json'

const defaultData = {
  en: defaultDataEn,
}

const projectData = (state = defaultData[settings.default_lang], action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return defaultData[action.lang]
    case IMPORT_JSON:
      return action.data
    default:
      return state
  }
}

export default projectData
