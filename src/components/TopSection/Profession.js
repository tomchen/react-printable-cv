import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import topStyle from './index.scss'

const Profession = ({ profession }) => (
  <div className={topStyle.profession}>{profession}</div>
)

Profession.propTypes = {
  profession: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  profession: state.profession,
})

export default connect(mapStateToProps)(Profession)
