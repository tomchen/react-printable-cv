import React from 'react'
import PropTypes from 'prop-types'

const ItemContent = ({content}) => <div>{content}</div>

ItemContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default ItemContent
