import React from 'react'
import PropTypes from 'prop-types'

const LastUpdate = ({ time }) => (
  <div>Last update: {time}</div>
)

LastUpdate.propTypes = {
  time: PropTypes.string.isRequired,
}

export default LastUpdate
