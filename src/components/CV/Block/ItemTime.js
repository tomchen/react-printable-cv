import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { autoDetectDmy } from 'Src/utils/timeFormat'
import tbbStyle from './TimeBasedBlock.scss'

const ItemTime = ({ from, to, currentLang, t }) => {
  const fromLocale = autoDetectDmy(from, currentLang)
  const toLocale = autoDetectDmy(to, currentLang)
  return (
    <div className={tbbStyle.time}>
      {to
        ? t('{{from}} – {{to}}', {
            from: fromLocale,
            to: toLocale,
          })
        : t('{{from}} – now', { from: fromLocale })}
    </div>
  )
}

ItemTime.defaultProps = {
  to: null,
}

ItemTime.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
  currentLang: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  currentLang: state.lang,
})

export default connect(mapStateToProps)(withTranslation()(ItemTime))
