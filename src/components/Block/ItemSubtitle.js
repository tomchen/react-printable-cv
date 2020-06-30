import React from 'react'
import PropTypes from 'prop-types'

const ItemSubtitle = ({content}) => <div>{content}</div>

ItemSubtitle.propTypes = {
  content: PropTypes.string.isRequired,
}

export default ItemSubtitle
