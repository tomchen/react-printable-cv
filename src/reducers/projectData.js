/// #if USEDUMMY
import settings from 'Settings/dummy'
/// #else
import settings from 'Settings'
/// #endif

import { CHANGE_LANG, IMPORT_JSON } from '../constants/ActionTypes'

/// #if USEDUMMY
import defaultDataEn from '../../data/dummy/project-list/en.json'
import defaultDataFr from '../../data/dummy/project-list/fr.json'
import defaultDataZhCn from '../../data/dummy/project-list/zh-cn.json'
/// #else
import defaultDataEn from '../../data/project-list/en.json'
import defaultDataFr from '../../data/project-list/fr.json'
import defaultDataZhCn from '../../data/project-list/zh-cn.json'
/// #endif

const defaultData = {
  en: defaultDataEn,
  fr: defaultDataFr,
  'zh-cn': defaultDataZhCn,
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
