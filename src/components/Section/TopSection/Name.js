import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Name = ({ name }) => <h2>{name}</h2>

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
