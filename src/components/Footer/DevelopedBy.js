import React from 'react'
import PropTypes from 'prop-types'

const DevelopedBy = ({ name, url, repoName, repoUrl }) => (
  <div>
    Developed by{' '}
    {url ? (
      <a href={url} target='_blank' rel='noopener noreferrer'>
        {name}
      </a>
    ) : (
      <span>{name}</span>
    )}{' '}
    with React.js
    {repoUrl && <> (
      <a href={repoUrl} target='_blank' rel='noopener noreferrer'>
        {repoName || 'repo'}
      </a>
    )</>}
    .
  </div>
)

DevelopedBy.defaultProps = {
  url: null,
  repoName: null,
  repoUrl: null,
}

DevelopedBy.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  repoName: PropTypes.string,
  repoUrl: PropTypes.string,
}

export default DevelopedBy
