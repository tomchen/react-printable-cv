import * as types from '../constants/ActionTypes'

export const changeLang = (lang) => ({ type: types.CHANGE_LANG, lang })

export const importJson = (data) => ({ type: types.IMPORT_JSON, data })
