import i18n from 'i18next'
import * as types from '../constants/ActionTypes'
import { userData, projectData } from '../utils/dataCache'

/// #if USEDUMMY
const useDummy = true
/// #else
const useDummy = false
/// #endif

const getDataLang = async (lang, userOrProject) => {
  // userOrProject: true=user ; false=project
  if (lang in (userOrProject ? userData : projectData)) {
    return userData.lang
  }

  const d = await
/// #if LESSCHUNKS
require(
/// #else
import(
/// #endif
    `Data/${useDummy ? 'dummy/' : '/'}${
      userOrProject ? 'cv' : 'project-list'
    }/${lang}.json`
  )
  return d
}

const getI18nLang = async (lang) => {
  // userOrProject: true=user ; false=project
  if (i18n.languages.includes(lang)) {
    return true
  }
  const res = await
/// #if LESSCHUNKS
require(
/// #else
import(
/// #endif
    `../../i18n/${lang}/common.json`)
  i18n.addResourceBundle(lang, 'common', res)
  return true
}

export const renderData = (data) => ({ type: types.RENDER_DATA, data })

export const changeLang = (lang) => ({ type: types.CHANGE_LANG, lang })

export const changeLangAsync = (lang) => (dispatch) => {
  Promise.all([
    getDataLang(lang, true),
    getDataLang(lang, false),
    getI18nLang(lang),
  ]).then(([fetchedUserData, fetchedProjectData]) => {
    dispatch(changeLang(lang))
    dispatch(
      renderData(
        {
          userData: fetchedUserData,
          projectData: fetchedProjectData,
        }
      ),
    )
  })
}

export const importJson = (data) => ({ type: types.IMPORT_JSON, data })
