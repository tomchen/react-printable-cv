import i18n from 'i18next'
import * as types from '../constants/ActionTypes'
import { userData, projectData, loadedLocale } from '../utils/dataCache'

const getDataLang = async (lang, userOrProject) => {
  // userOrProject: true=user ; false=project
  if (lang in (userOrProject ? userData : projectData)) {
    return userData.lang
  }

  const d = await import(
    `Data/${userOrProject ? 'cv' : 'project-list'}/${lang}.json`
  )
  return d
}

const getI18nLang = async (lang) => {
  if (loadedLocale.includes(lang)) {
    return true
  }
  const res = await import(`../../i18n/${lang}/common.json`)
  i18n.addResourceBundle(lang, 'common', res)
  loadedLocale.push(lang)
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
      renderData({
        userData: fetchedUserData,
        projectData: fetchedProjectData,
      }),
    )
  })
}

export const importJson = (data) => ({ type: types.IMPORT_JSON, data })
