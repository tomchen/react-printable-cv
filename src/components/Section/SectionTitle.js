import React from 'react'
import PropTypes from 'prop-types'
import sectionTitleStyle from './SectionTitle.scss'

const SectionTitle = ({ title }) => (
  <h3 className={sectionTitleStyle.title}>{title}</h3>
)

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SectionTitle
