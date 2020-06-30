import React from 'react'
import PropTypes from 'prop-types'

const ItemTitle = ({content}) => <div>{content}</div>

ItemTitle.propTypes = {
  content: PropTypes.string.isRequired,
}

export default ItemTitle
