import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

const DevelopedBy = ({ name, url, repoName, gitUrl, t }) => (
  <div>
    {t('Developed by ')}
    {url ? (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    ) : (
      <span>{name}</span>
    )}
    {t(' with React')}
    {gitUrl && (
      <>
        {' '}
        (
        <a href={gitUrl} target="_blank" rel="noopener noreferrer">
          {repoName || t('repo')}
        </a>
        )
      </>
    )}
    {t('.')}
  </div>
)

DevelopedBy.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  repoName: PropTypes.string,
  gitUrl: PropTypes.string,
  t: PropTypes.func.isRequired,
}

export default withTranslation()(DevelopedBy)
