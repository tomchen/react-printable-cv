import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Profession = ({ profession }) => <div>{profession}</div>

Profession.propTypes = {
  profession: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  profession: state.profession,
})

export default connect(mapStateToProps)(Profession)
