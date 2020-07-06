import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import topStyle from './index.scss'

const Name = ({ name }) => <h1 className={topStyle.name}>{name}</h1>

Name.propTypes = {
  name: PropTypes.string.isRequired,
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  name: state.userData.name,
})

export default connect(mapStateToProps)(Name)
