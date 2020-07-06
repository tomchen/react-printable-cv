import React from 'react'
import PropTypes from 'prop-types'
import tbbStyle from './TimeBasedBlock.scss'

const ItemSubtitle = ({content}) => <div className={tbbStyle.subtitle}>{content}</div>

ItemSubtitle.propTypes = {
  content: PropTypes.string.isRequired,
}

export default ItemSubtitle
