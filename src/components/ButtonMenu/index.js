import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeLang } from '../../actions'
import Button from './Button'
import SwitchBar from './SwitchBar'
import buttonStyle from './index.scss'
import pdfUrlEn from '../../../pdf/en.pdf'
import pdfUrlFr from '../../../pdf/fr.pdf'
import pdfUrlZhCn from '../../../pdf/zh-cn.pdf'
import settings from '../../../settings'

const pdfUrls = {
  en: pdfUrlEn,
  fr: pdfUrlFr,
  'zh-cn': pdfUrlZhCn,
}

const ButtonMenu = ({ currentLang, dispatch }) => {
  const print = () => {
    window.print()
  }

  const handleLangChange = (lang) => {
    dispatch(changeLang(lang))
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

  const handleSwitchChange = (switchOn) => {
    console.log(switchOn)
  }

  return (
    <div className={buttonStyle.menu}>
      {settings.langs.map(({ code, name }) => (
        <Button
          key={code}
          disabled={currentLang === code}
          text={name}
          title={currentLang !== code ? 'Change language' : undefined}
          onClick={() => {
            handleLangChange(code)
          }}
        />
      ))}
      <Button
        text="PDF"
        title="Download PDF file for the current language"
        onClick={pdf}
        color="secondary"
      />
      <Button
        text="Print (🧪)"
        title="Experimental. It's almost perfect in Chrome. Firefox user should set print scale to 100% instead of 'Shrink To Fit'. Other browsers may have problems. Instead, you may click 'PDF' then print the PDF file."
        onClick={print}
        color="default"
      />
      <SwitchBar text="Edit mode" onChange={handleSwitchChange} />
      <Button
        text="Export JSON"
        title="Export .json file of the data"
        onClick={print}
      />
      <Button
        text="Import JSON"
        title="Import .json file and replace the data"
        onClick={print}
      />
    </div>
  )
}

ButtonMenu.propTypes = {
  currentLang: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  currentLang: state.lang,
})

export default connect(mapStateToProps)(ButtonMenu)
