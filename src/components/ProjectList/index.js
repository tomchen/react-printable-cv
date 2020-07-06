import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Page from '../Page'
import projectListStyle from './index.scss'

const ProjectList = () => (
  <Page className={projectListStyle}>
    <>aaaaaaaaaaaaaaa</>
  </Page>
)

ProjectList.defaultProps = {
  customSections: null,
}

ProjectList.propTypes = {}

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(ProjectList)
