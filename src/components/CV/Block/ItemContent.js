import React from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import tbbStyle from './TimeBasedBlock.scss'

const ItemContent = ({ content }) => (
  <div className={tbbStyle.content}>
    <Markdown source={content} />
  </div>
)

ItemContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default ItemContent
