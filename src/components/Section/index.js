import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from './SectionTitle'

const Section = ({ title, children }) => (
  <div>
    <SectionTitle title={title} />
    {children}
  </div>
)

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default Section
