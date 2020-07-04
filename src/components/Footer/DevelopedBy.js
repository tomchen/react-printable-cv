import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

const DevelopedBy = ({ name, url, repoName, repoUrl, t }) => (
  <div>
    {t('Developed by ')}
    {url ? (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    ) : (
      <span>{name}</span>
    )}
    {t(' with React.js')}
    {repoUrl && (
      <>
        {' '}
        (
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          {repoName || t('repo')}
        </a>
        )
      </>
    )}
    {t('.')}
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
  t: PropTypes.func.isRequired,
}

export default withTranslation()(DevelopedBy)
