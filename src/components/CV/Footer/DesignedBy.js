import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'

const DesignedBy = ({ name, url, t }) => (
  <div>
    {t('Designed by ')}
    {url ? (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    ) : (
      <span>{name}</span>
    )}
    {t('.')}
  </div>
)

DesignedBy.defaultProps = {
  url: null,
}

DesignedBy.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  t: PropTypes.func.isRequired,
}

export default withTranslation()(DesignedBy)
