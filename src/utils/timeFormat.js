import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/en'
import 'dayjs/locale/en-gb'
import 'dayjs/locale/fr'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/zh-tw'
import 'dayjs/locale/de'
import 'dayjs/locale/es'
import 'dayjs/locale/it'
import 'dayjs/locale/pt'
import 'dayjs/locale/ru'
import 'dayjs/locale/ja'
import 'dayjs/locale/ko'
import 'dayjs/locale/ar'
import 'dayjs/locale/hi'

const dateLocalObjsDefault = {
  L: 'MMMM YYYY',
  LLL: 'D MMMM',
  LLLL: 'YYYY',
}

const dateLocalObjs = {
  de: {
    L: 'MMMM YYYY',
    LLL: 'D. MMMM',
    LLLL: 'YYYY',
  },
  es: {
    L: 'MMMM [de] YYYY',
    LLL: 'D [de] MMMM',
    LLLL: 'YYYY',
  },
  pt: {
    L: 'MMMM [de] YYYY',
    LLL: 'D [de] MMMM',
    LLLL: 'YYYY',
  },
  'zh-cn': {
    l: 'YYYY年M月',
    lll: 'M月D日',
    llll: 'YYYY年',
  },
  'zh-tw': {
    l: 'YYYY年M月',
    lll: 'M月D日',
    llll: 'YYYY年',
  },
  ja: {
    l: 'YYYY年M月',
    lll: 'M月D日',
    llll: 'YYYY年',
  },
  ko: {
    l: 'YYYY년 MMMM',
    lll: 'MMMM D일',
    llll: 'YYYY년',
  },
}

const ageFormats = {
  en: 'age *',
  'en-gb': 'age *',
  fr: '* ans',
  'zh-cn': '*岁',
  'zh-tw': '*歲',
  de: 'Alter *',
  es: '* años',
  it: '* anni',
  pt: '* anos',
  ru: '* лет',
  ja: '*歳',
  ko: '* 세',
  ar: '* سنة',
  hi: '* साल की उम्र',
}

// you should use 'l' and 'lll' at the end

dayjs.extend(localizedFormat)

dayjs.extend((option, Dayjs, dayjsp) => {
  const dayjsc = dayjsp
  const cache = {}
  let localeConfig
  dayjsc.addFormats = (locale) => {
    const localeList = dayjsc.Ls
    localeConfig = localeList[locale]
    if (!localeConfig) return

    let localeObjToAdd
    if (locale in dateLocalObjs) {
      localeObjToAdd = dateLocalObjs[locale]
    } else {
      localeObjToAdd = dateLocalObjsDefault
    }
    Object.keys(localeObjToAdd).forEach((key) => {
      cache[key] = localeConfig.formats[key]
    })

    Object.assign(localeConfig.formats, localeObjToAdd)

    return localeConfig // eslint-disable-line consistent-return
  }

  // dayjsc.addFormats.changeBack = () => {
  //   Object.keys(cache).forEach((key) => {
  //     localeConfig.formats[key] = cache[key]
  //   })
  //   return localeConfig
  // }
})

export const my = (date, locale) => {
  dayjs.addFormats(locale)
  const ret = dayjs(date).locale(locale).format('l')
  // dayjs.addFormats.changeBack()
  return ret
}

// my with first letter being uppercase
export const myUfl = (date, locale) => {
  const s = my(date, locale)
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const dm = (date, locale) => {
  dayjs.addFormats(locale)
  const ret = dayjs(date).locale(locale).format('lll')
  // dayjs.addFormats.changeBack()
  return ret
}

export const dmy = (date, locale) => dayjs(date).locale(locale).format('ll')

export const y = (date, locale) => {
  dayjs.addFormats(locale)
  const ret = dayjs(date).locale(locale).format('llll')
  // dayjs.addFormats.changeBack()
  return ret
}

export const autoDetectDmy = (date, locale) => {
  if (/^\d{4}-\d{1,2}-\d{1,2}$/.test(date)) {
    return dmy(date, locale)
  }
  if (/^\d{4}-\d{1,2}$/.test(date)) {
    return myUfl(date, locale)
  }
  if (/^\d{1,2}-\d{1,2}$/.test(date)) {
    return dm(date, locale)
  }
  return null
}

export const age = (birthDate, locale) => {
  const a = dayjs().diff(dayjs(birthDate), 'year')
  if (locale in ageFormats) {
    return ageFormats[locale].replace('*', a.toString())
  }
  return a.toString()
}
