import React from 'react'
import PropTypes from 'prop-types'

const DevelopedBy = ({ name, url }) => (
  <div>Developed by {url ? <a href={url}>{name}</a> : <span>{name}</span>}</div>
)

DevelopedBy.defaultProps = {
  url: null,
}

DevelopedBy.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
}

export default DevelopedBy
