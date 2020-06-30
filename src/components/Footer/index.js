import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DesignedBy from './DesignedBy'
import DevelopedBy from './DevelopedBy'
import LastUpdate from './LastUpdate'

const Footer = ({designer, designerUrl, developer, developerUrl, lastUpdateTime}) => (
  <div>
    <DesignedBy name={designer} url={designerUrl} />
    <DevelopedBy name={developer} url={developerUrl} />
    <LastUpdate time={lastUpdateTime} />
  </div>
)

Footer.defaultProps = {
  designerUrl: null,
  developerUrl: null,
}

Footer.propTypes = {
  designer: PropTypes.string.isRequired,
  designerUrl: PropTypes.string,
  developer: PropTypes.string.isRequired,
  developerUrl: PropTypes.string,
  lastUpdateTime: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  designer: state.designed_by.name,
  designerUrl: state.designed_by.url,
  developer: state.developed_by.name,
  developerUrl: state.developed_by.url,
  lastUpdateTime: state.last_update,
})

export default connect(mapStateToProps)(Footer)
