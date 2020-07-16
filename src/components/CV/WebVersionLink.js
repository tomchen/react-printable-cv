import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withTranslation } from 'react-i18next'
import CVStyle from './index.scss'

const WebVersionLink = ({ url, t }) => (
  <a
    className={CVStyle.webversionlink}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {t('Click here for the web version of this CV')}
  </a>
)

WebVersionLink.propTypes = {
  url: PropTypes.string,
  t: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  url: state.userData.web_version_url,
  t: PropTypes.func.isRequired,
})

export default connect(mapStateToProps)(withTranslation()(WebVersionLink))
