import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { changeLang } from '../../actions'
import Button from './Button'
// import SwitchBar from './SwitchBar'
import buttonStyle from './index.scss'
import pdfUrlEn from '../../../pdf/en.pdf'
import pdfUrlFr from '../../../pdf/fr.pdf'
import pdfUrlZhCn from '../../../pdf/zh-cn.pdf'
import settings from '../../../settings'
import UploadButton from './UploadButton'

const pdfUrls = {
  en: pdfUrlEn,
  fr: pdfUrlFr,
  'zh-cn': pdfUrlZhCn,
}

const downloadStringAsFile = (filename, text) => {
  const el = document.createElement('a')
  el.setAttribute(
    'href',
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`,
  )
  el.setAttribute('download', filename)
  el.style.display = 'none'
  document.body.appendChild(el)
  el.click()
  document.body.removeChild(el)
}

const ButtonMenu = ({ currentLang, userData, dispatch, t }) => {
  const print = () => {
    window.print()
  }

  const handleLangChange = (lang) => {
    dispatch(changeLang(lang))
  }

  const handleExportJson = () => {
    downloadStringAsFile('data.json', JSON.stringify(userData, null, 2))
  }

  const handleImportJson = () => {
  }

  const pdf = () => {
    const currentPdfUrl = pdfUrls[currentLang]
    if (/^data:.+/.test(currentPdfUrl)) {
      // is base64
      fetch(currentPdfUrl)
        .then((res) => res.blob())
        .then((blob) => {
          window.location.href = URL.createObjectURL(blob)
        })
    } else {
      window.open(currentPdfUrl)
    }
  }

  // const handleEditModeChange = (switchOn) => {

  // }

  return (
    <div className={buttonStyle.menu}>
      {settings.langs.map(({ code, name }) => (
        <Button
          key={code}
          disabled={currentLang === code}
          text={name}
          title={currentLang !== code ? t('Change language') : undefined}
          onClick={() => {
            handleLangChange(code)
          }}
        />
      ))}
      <Button
        text={t('PDF')}
        title={t('Download PDF file for the current language')}
        onClick={pdf}
        color="secondary"
      />
      <Button
        text={t('Print (🧪)')}
        title={t(
          'Experimental. Almost perfect in Chrome. Firefox user should set print scale to 100% instead of "Shrink To Fit". Other browsers may have problems. Instead, you may click "PDF" then print the PDF file.',
        )}
        onClick={print}
        color="default"
      />
      {/* <SwitchBar text={t('Edit mode')} onChange={handleEditModeChange} /> */}
      <Button
        text={t('Export JSON')}
        title={t('Export .json file of the data')}
        onClick={handleExportJson}
      />
      {/* <UploadButton /> */}
    </div>
  )
}

ButtonMenu.propTypes = {
  currentLang: PropTypes.string.isRequired,
  userData: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  currentLang: state.lang,
  userData: state.userData,
})

export default connect(mapStateToProps)(withTranslation()(ButtonMenu))
