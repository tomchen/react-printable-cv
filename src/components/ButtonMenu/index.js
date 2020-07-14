import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { downloadStringAsFile, downloadBlobAsFile } from '../../utils/download'
import { changeLangAsync } from '../../actions'
import Button from './Button'
// import SwitchBar from './SwitchBar'
import buttonStyle from './index.scss'
// import UploadButton from './UploadButton'

import pdfUrlEn from '../../../pdf/en.pdf'
import pdfUrlFr from '../../../pdf/fr.pdf'
import pdfUrlZhCn from '../../../pdf/zh-cn.pdf'

const settings = require('Settings')

const pdfUrls = {
  en: pdfUrlEn,
  fr: pdfUrlFr,
  'zh-cn': pdfUrlZhCn,
}

const ButtonMenu = ({ currentLang, userData, projectData, dispatch, t }) => {
  const print = () => {
    window.print()
  }

  const handleGotoGithub = () => {
    window.open('https://github.com/tomchen/react-printable-cv')
  }

  const handleLangChange = (lang) => {
    dispatch(changeLangAsync(lang))
  }

  const handleExportJson = () => {
    downloadStringAsFile(
      'data.json',
      JSON.stringify({ cv: userData, project_list: projectData }, null, 2),
    )
  }

  const pdf = () => {
    const currentPdfUrl = pdfUrls[currentLang]
    if (/^data:.+/.test(currentPdfUrl)) {
      // is base64
      fetch(currentPdfUrl)
        .then((res) => res.blob())
        .then((blob) => {
          downloadBlobAsFile(`cv.${currentLang}.pdf`, blob)
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
        color="default"
      />
      {/* <UploadButton /> */}
      <Button text={t('GitHub')} onClick={handleGotoGithub} color="default" />
    </div>
  )
}

ButtonMenu.defaultProps = {
  currentLang: null,
}

ButtonMenu.propTypes = {
  currentLang: PropTypes.string,
  userData: PropTypes.objectOf(PropTypes.any).isRequired,
  projectData: PropTypes.objectOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  currentLang: state.lang,
  userData: state.userData,
  projectData: state.projectData,
})

export default connect(mapStateToProps)(withTranslation()(ButtonMenu))
