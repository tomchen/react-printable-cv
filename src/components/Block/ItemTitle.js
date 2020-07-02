import React from 'react'
import PropTypes from 'prop-types'
import tbbStyle from './TimeBasedBlock.scss'

const ItemTitle = ({content}) => <div className={tbbStyle.title}>{content}</div>

ItemTitle.propTypes = {
  content: PropTypes.string.isRequired,
}

export default ItemTitle
