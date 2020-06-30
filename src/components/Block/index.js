import React from 'react'
import PropTypes from 'prop-types'

const Block = ({ children }) => <div>{children}</div>

Block.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default Block
