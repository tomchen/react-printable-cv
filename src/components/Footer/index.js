import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DesignedBy from './DesignedBy'
import DevelopedBy from './DevelopedBy'
import LastUpdate from './LastUpdate'
import footerStyle from './index.scss'

const Footer = ({designer, designerUrl, developer, developerUrl, lastUpdateTime, repoName, repoUrl}) => (
  <footer className={footerStyle.footer}>
    <DesignedBy name={designer} url={designerUrl} />
    <DevelopedBy name={developer} url={developerUrl} repoName={repoName} repoUrl={repoUrl} />
    <LastUpdate time={lastUpdateTime} />
  </footer>
)

Footer.defaultProps = {
  designerUrl: null,
  developerUrl: null,
  repoName: null,
  repoUrl: null,
}

Footer.propTypes = {
  designer: PropTypes.string.isRequired,
  designerUrl: PropTypes.string,
  developer: PropTypes.string.isRequired,
  developerUrl: PropTypes.string,
  repoName: PropTypes.string,
  repoUrl: PropTypes.string,
  lastUpdateTime: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  designer: state.userData.designed_by.name,
  designerUrl: state.userData.designed_by.url,
  developer: state.userData.developed_by.name,
  developerUrl: state.userData.developed_by.url,
  repoName: state.userData.developed_by.repo_name,
  repoUrl: state.userData.developed_by.repo_url,
  lastUpdateTime: state.userData.last_update,
})

export default connect(mapStateToProps)(Footer)
