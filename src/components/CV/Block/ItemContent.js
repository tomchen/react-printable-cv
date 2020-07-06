import React from 'react'
import PropTypes from 'prop-types'
import tbbStyle from './TimeBasedBlock.scss'

const ItemContent = ({content}) => <div className={tbbStyle.content}>{content}</div>

ItemContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default ItemContent
