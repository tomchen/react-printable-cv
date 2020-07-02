import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import topStyle from './index.scss'

const Name = ({ name }) => <h2 className={topStyle.name}>{name}</h2>

Name.propTypes = {
  name: PropTypes.string.isRequired,
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  name: state.name,
})

export default connect(mapStateToProps)(Name)
