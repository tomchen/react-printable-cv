import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DesignedBy from './DesignedBy'
import DevelopedBy from './DevelopedBy'
import LastUpdate from './LastUpdate'
import footerStyle from './index.scss'

const Footer = ({ design, develop, lastUpdateTime }) => {
  return (
    <footer className={footerStyle.footer}>
      {develop && (
        <DevelopedBy
          name={develop.name}
          url={develop.url}
          repoName={develop.repo_name}
          gitUrl={develop.git_url}
        />
      )}
      {design && <DesignedBy name={design.name} url={design.url} />}
      {lastUpdateTime && <LastUpdate time={lastUpdateTime} />}
    </footer>
  )
}

Footer.defaultProps = {
  design: null,
  develop: null,
  lastUpdateTime: null,
}

Footer.propTypes = {
  design: PropTypes.objectOf(PropTypes.string),
  develop: PropTypes.objectOf(PropTypes.string),
  lastUpdateTime: PropTypes.string,
}

const mapStateToProps = (state) => ({
  design: state.userData.designed_by,
  develop: state.userData.developed_by,
  lastUpdateTime: state.userData.last_update,
})

export default connect(mapStateToProps)(Footer)
