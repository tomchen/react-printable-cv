import React from 'react'
import PropTypes from 'prop-types'

const SectionTitle = ({ title }) => <h3>{title}</h3>

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SectionTitle
