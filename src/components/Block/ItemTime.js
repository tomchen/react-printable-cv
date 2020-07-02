import React from 'react'
import PropTypes from 'prop-types'
import tbbStyle from './TimeBasedBlock.scss'
import { autoDetectDmy } from '../../timeFormat'

const ItemTime = ({ from, to }) => (
  <div className={tbbStyle.time}>
    {to
      ? `${autoDetectDmy(from, 'fr')} - ${autoDetectDmy(to, 'fr')}`
      : `${autoDetectDmy(from, 'fr')} - now`}
  </div>
)

ItemTime.defaultProps = {
  to: null,
}

ItemTime.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string,
}

export default ItemTime
