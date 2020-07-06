import React from 'react'
import PropTypes from 'prop-types'
import sectionTitleStyle from './SectionTitle.scss'

const SectionTitle = ({ title }) => (
  <h2 className={sectionTitleStyle.title}>{title}</h2>
)

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SectionTitle
