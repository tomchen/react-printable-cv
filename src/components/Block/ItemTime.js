import React from 'react'
import PropTypes from 'prop-types'

const ItemTime = ({from, to}) => <div>{from} - {to}</div>

ItemTime.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default ItemTime
