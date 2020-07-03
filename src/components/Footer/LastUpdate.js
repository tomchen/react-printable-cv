import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { autoDetectDmy } from '../../utils/timeFormat'

const LastUpdate = ({ time, t, i18n }) => {
  return (
    <div>
      {t('Last update: ')}
      {autoDetectDmy(time, i18n.language)}
    </div>
  )
}

LastUpdate.propTypes = {
  time: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  i18n: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default connect()(withTranslation()(LastUpdate))
