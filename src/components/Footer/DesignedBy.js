import React from 'react'
import PropTypes from 'prop-types'

const DesignedBy = ({ name, url }) => (
  <div>
    Designed by{' '}
    {url ? (
      <a href={url} target='_blank' rel='noopener noreferrer'>
        {name}
      </a>
    ) : (
      <span>{name}</span>
    )}
    .
  </div>
)

DesignedBy.defaultProps = {
  url: null,
}

DesignedBy.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
}

export default DesignedBy
